import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApicallService } from 'src/app/services/apicall.service';
import { set } from 'src/app/localStorage/LocalStorage';
import { ToastService } from 'src/app/services/toast.service';
import { ngxLoadingAnimationTypes } from 'ngx-loading';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loading = false;

  public ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;
  public userdata : any = {email:'', password:''};
  constructor( public router : Router,    private apiCall : ApicallService, private toast : ToastService) {}

  addlogin() {
    this.router.navigate(['default/dashboard']);
    // this.apicall.api_adminlogin(this.userdata);
  }
  public Login():void {
    if(this.userdata.email == 'bltestuser@gmail.com') {
      this.router.navigate(["calculator"])
    }
else {
  this.loading = true;
  const userEmail = {email:this.userdata.email}
  console.log(userEmail)
  this.apiCall.api_checkPassword(userEmail).subscribe(user=>{
    console.log(user)
    if(user.error == false) {
      this.loading = false;
      this.toast.ErrorToast('Please reset your password to continue', 'Alert')
      this.router.navigate(["forgetpassword"])
    }
    else {
      this.loading = false;
      this.apiCall.login(this.userdata).subscribe(res => {
   
        if(res.error === false){
          this.loading = false;
            set('user', res?.data[0]);
            this.router.navigate(["default/index"])
            this.toast.SuccessToast('Login Successfully', 'Good Job!')
        } 
       else {
        this.loading = false;
        // alert("InValid Credential")
        this.toast.ErrorToast('Invalid email or password', 'Sorry!')
       }
      })
    }
  })
}

  }
  handleUpload($event:any) {
    console.log($event)
    console.log($event.target.files[0])
    const file = $event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        console.log(reader.result);
    };
  }
  goToRegiester() {
    this.router.navigate(['registrationform'], {
        // state: { data: userData},
        queryParams: { id: 'google' },
      });
  }

}
