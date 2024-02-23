import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApicallService } from 'src/app/services/apicall.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent implements OnInit{


    public userDetail : any = {type:'Id', pin:'', email:'', username:''}
    public isResetPassword : boolean = false;
    public userData : any = {
      id: '',
      name: '',
      email: '',
      contactNumber: '',
      whatsApp: '',
      company: '',
      bname: '',
      accoundNumber: '',
      easypaisa: '',
      pin: '',
      username: '',
      InvitedLink: '',
      userpin: '',
      balnce: ''
  };

  public userResetPasswordData : any  = {user_id:'', password:''}
  public newpassword: any;
  public showmessage: any;
    constructor(private apicall : ApicallService, private toast : ToastService, private router : Router) {}
  ngOnInit() {
  
  }

  checkDetails() {
    console.log(this.userDetail)
    this.apicall.api_resetDetail(this.userDetail).subscribe(res=>{
      console.log(res)
      if(res.error == false) {
        this.userData = res.data;
        this.toast.SuccessToast('Now Reset Your Password', 'Good Job!');
        this.isResetPassword = true;
        console.log(this.userData)
      }
      else {
        this.toast.ErrorToast(`You have entered wronge ${this.userDetail.type} or email! Please enter valid ${this.userDetail.type} or email`, 'Sorry!')
      }
    })
  }


  password($event:any) {
    console.log($event.target.value);
    this.newpassword = $event.target.value;
  }
  confirmpassword($event:any) {
    console.log($event.target.value)
    if($event.target.value == this.newpassword) {
      console.log('password correct');
      this.showmessage = "Correct Password";
      this.userResetPasswordData.password  = $event.target.value;
    }
    else{
      console.log('password not match');
      this.showmessage = "Password Not Matched!";
    }
  }

  restPassword() {
    this.userResetPasswordData.user_id = this.userData.id;
    console.log(this.userResetPasswordData)
    this.apicall.api_restPassword(this.userResetPasswordData).subscribe(res=>{
      console.log(res)
      if(res.error == false) {
        this.toast.SuccessToast('Your Password is reset now! Please login again to continue', 'Good Job!');
        this.router.navigate(["login"])
      }
      else{
        this.toast.ErrorToast('Your Password is not reset! Please try Again', 'Sorry');
      }
    })
  }


}
