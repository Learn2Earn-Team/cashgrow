import { Component } from '@angular/core';
import { check } from 'src/app/localStorage/LocalStorage';
import { ApicallService } from 'src/app/services/apicall.service';
import { ToastService } from 'src/app/services/toast.service';
@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.scss']
})
export class MyprofileComponent {
  public userobj :any = {};
  public user :any;
  constructor ( private apiCall : ApicallService, private toast : ToastService){
    this.GetUserData();
  }
  ngOnInit() {
    this.GetUserData();
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
}
