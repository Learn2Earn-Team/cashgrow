import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { check } from 'src/app/localStorage/LocalStorage';
import { ApicallService } from 'src/app/services/apicall.service';
import { ToastService } from 'src/app/services/toast.service';

import { Clipboard } from '@capacitor/clipboard';@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, AfterViewInit, OnDestroy{
  public userobj :any = {};
  public user :any;
  userData: any;
  randomData: any;
  interval: any;
  userDashboardData: any;
  constructor ( private apiCall : ApicallService, private toast : ToastService){
    this.GetUserData();
    this.getUserProfiledataa();
    this.getRandomData();
    this.getUserDashoardData();
  }
  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
  ngAfterViewInit(): void {
    this.interval = setInterval(async () => {
      console.log(this.interval)
      this.getRandomData()
    }, 10000);

  }
  ngOnInit() {
    
    this.GetUserData();
    this.getUserProfiledataa();
    this.getRandomData();
    this.getUserDashoardData();
  }

  async getUserProfiledataa() {
    const user: any = await check('user');
    const userData = JSON.parse(user);
    console.log(userData);
    this.userData = userData;
    this.apiCall.GetuserProfileData(userData.id).subscribe(profile=>{
      console.log(profile)
      this.userobj = profile[0];
      console.log('usrimages',this.userobj.image);
    })
  }

  public async GetUserData(){
      this.user = await  check("user");
      const userData = JSON.parse(this.user)
      this.apiCall.GetuserProfileData(userData.id).subscribe(profile=>{
        console.log(profile)
        this.userobj = profile[0];
      })
  }
  public updateuser():void {
    this.apiCall.UpdateUser(this.userobj).subscribe(res => {
      this.GetUserData();
      if(res.error === false){
        this.toast.SuccessToast('Your Profile has been updated','Congratulations!')
      } 
    
    })
  }

  public getRandomData() {
    this.apiCall.api_getRandomData().subscribe(data=>{
      console.log(data)
      this.randomData = data
    })
  }

  async getUserDashoardData() {
    const user: any = await check('user');
    const userData = JSON.parse(user);
    console.log(userData);
    console.log(userData.id);
    this.apiCall.api_getmyteam(userData.username).subscribe(team=>{
      console.log(team)
      this.apiCall.getdashboardData(userData.id, team).subscribe((res) => {
        console.log(res);
        this.userDashboardData = res;
      });
    })

  }

  imageUpload($event:any) {
    console.log($event)
    console.log($event.target.files[0])
    const file = $event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async () => {
      const base64String = reader.result?.toString().split(',')[1];
      console.log(base64String);
      const user :any = await  check("user");
      const userData = JSON.parse(user)
      const userImageData = {user_id: userData.id, image:base64String}
      this.apiCall.updateUserImage(userImageData).subscribe(imageRes=>{
        this.GetUserData();
        console.log(imageRes);
        if(imageRes.error == false) {
          this.toast.SuccessToast('Your Profile Picture has been updated','Congratulations!')
        }
      })
    };
  }
  async copyUserId() {
    console.log(window.location.origin);
    const user: any = await check('user');
    const userData = JSON.parse(user);
    console.log(userData);
    const url = `https://thecashgrow.com/#/registrationform?id=${userData.username}`;
    await Clipboard.write({
      string: url,
    }).then(
      () => {
        this.toast.SuccessToast('Linked Copied to clipboard', 'Successfully!');
      },
      () => {
        console.error('Failed to copy');
      }
    );
    const { type, value } = await Clipboard.read();
    console.log(`Got ${type} from clipboard: ${value}`);
  }


  downloadApkFromAssets(apkName: string) {
    // Construct the path to the APK file in the assets folder
    const apkPath = `assets/${apkName}`;

    // Read the APK file from the assets
    fetch(apkPath)
      .then((response) => response.blob())
      .then((blob) => {
        // Create a link element
        const link = document.createElement('a');

        // Set the download attribute, file name, and type
        link.download = apkName;
        link.href = window.URL.createObjectURL(blob);
        link.type = 'application/vnd.android.package-archive';

        // Append the link to the body
        document.body.appendChild(link);

        // Trigger the click event to start the download
        link.click();

        // Remove the link from the DOM
        document.body.removeChild(link);
      })
      .catch((error) => {
        console.error('Error downloading APK:', error);
      });
  }


}
 