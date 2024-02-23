import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ngxLoadingAnimationTypes } from 'ngx-loading';
import { check } from 'src/app/localStorage/LocalStorage';
import { ApicallService } from 'src/app/services/apicall.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-postpage',
  templateUrl: './postpage.component.html',
  styleUrls: ['./postpage.component.scss']
})
export class PostpageComponent implements OnInit{
  loading = false;

  public ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;
  public segmentvalue : any  = "post";
  public userPostData : any = {username:'', image:'', caption:''};
  public userStatusData : any = {username:'', image:'', caption:''};
  uploadedImage: any;
  constructor(private apicall : ApicallService, private toast : ToastService, private route : Router) {}


  ngOnInit(): void {
   
  }
  activeTab(tab:string) {
    console.log(tab)
    this.segmentvalue = tab;
  }
  imageUpload($event:any) {
    console.log($event)
    console.log($event.target.files[0])
    const file = $event.target.files[0];
    const label = $event.target.parentElement;
    if (file) {
      const reader = new FileReader();
      reader.onload = async (e:any) => {
        label.style.backgroundImage = `url('${e.target.result}')`;
        label.style.backgroundSize = 'cover';
        label.style.backgroundPosition = 'center center';
        label.style.backgroundRepeat = 'no-repeat';
        const base64String = reader.result?.toString().split(',')[1];
        console.log(base64String);
        this.userPostData.image = base64String;
      };
      reader.readAsDataURL(file);
    }
  }

  async addPost() {
    this.loading = true;
    const user :any = await  check("user");
    const userData = JSON.parse(user)
    this.userPostData.username = userData.username;
    console.log(this.userPostData)
    this.apicall.api_insertPost(this.userPostData).subscribe(res=>{
      console.log(res)
      this.userPostData = {username:userData.username, image:'', caption:''};
      if(res.error  == false){
        this.loading = false;
        this.toast.SuccessToast('Post Created!', 'Congratulations');
        this.route.navigate(['default/view-post']);
      }
      else{
        this.loading = false;
      }
    })
  }

  StatusImageUpload($event:any) {
    console.log($event)
    console.log($event.target.files[0])
    const file = $event.target.files[0];
    const label = $event.target.parentElement;
    if (file) {
      const reader = new FileReader();
      reader.onload = async (e:any) => {
        label.style.backgroundImage = `url('${e.target.result}')`;
        label.style.backgroundSize = 'cover';
        label.style.backgroundPosition = 'center center';
        label.style.backgroundRepeat = 'no-repeat';
        const base64String = reader.result?.toString().split(',')[1];
        console.log(base64String);
        this.userStatusData.image = base64String;
      };
      reader.readAsDataURL(file);
    }
  }

  async addStatus() {
    this.loading = true;
    const user :any = await  check("user");
    const userData = JSON.parse(user)
    this.userStatusData.username = userData.username;
    console.log(this.userStatusData)
    this.apicall.api_postStatus(this.userStatusData).subscribe(res=>{
      console.log(res)
      this.userStatusData = {username:userData.username, image:'', caption:''};
      if(res.error  == false){
        this.loading = false;
        this.toast.SuccessToast('Status Posted!', 'Congratulations');
        this.route.navigate(['default/view-post']);
      }
      else{
        this.loading = false;
      }
    })
  }

}
