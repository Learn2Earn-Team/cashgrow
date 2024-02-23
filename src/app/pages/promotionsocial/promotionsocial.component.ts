import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Toast } from 'ngx-toastr';
import { check } from 'src/app/localStorage/LocalStorage';
import { ApicallService } from 'src/app/services/apicall.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-promotionsocial',
  templateUrl: './promotionsocial.component.html',
  styleUrls: ['./promotionsocial.component.scss'],
})
export class PromotionsocialComponent implements OnInit {
  hasClickedAddPackage: boolean = false;
  userData: any = {
    id: '',
    name: '',
    email: '',
    contactNumber: '',
    whatsApp: '',
    company: '',
    bname: '',
    jazzcash: '',
    accoundNumber: '',
    easypaisa: '',
    pin: '',
    username: '',
    InvitedLink: '',
  };
  public userDeposits: any = {};
  public packageDetails : any = {PackageDetail:{
  mainAmount:'',
  level1:'',
  level2:'',
  level3:'',
  user_id:'',
  username:''
},Users:[]}
  constructor(
    private apiCall: ApicallService,
    private route: Router,
    private toast: ToastService
  ) {}

  ngOnInit() {
    this.getUserData();
  }

  async getUserData() {
    const user: any = await check('user');
    const userData = JSON.parse(user);
    this.userData = userData;
    this.apiCall.getUserDepositAmount(this.userData?.id).subscribe((res) => {
      this.userDeposits = res[0];
      console.log(this.userDeposits);
    });
  }

  async checkBalacne() {
    const user: any = await check('user');
    const userData = JSON.parse(user);
    console.log(userData);
    this.apiCall.userdata(userData.username).subscribe((user) => {
      console.log(user);
      // this.userBlanace = +user.balnce;
      // console.log(typeof this.userBlanace, this.userBlanace);
      // if ($event.target.value > this.userBlanace) {
      //   // this.showBalanceMessage = `You have only Rs. ${this.userBlanace} balance`;
      //   // console.log('you have not balacne');
      // } else {
      //   // this.showBalanceMessage = '';
      // }
    });
  }

  public async ActivePackage(mainAmount:number, level1Amount:any,level2Amount:any,level3Amount:any) {
    const user: any = await check('user');
    const userData = JSON.parse(user);
    console.log(userData);
    console.log(mainAmount, level1Amount, level2Amount, level3Amount)
    this.packageDetails.PackageDetail.mainAmount = mainAmount;
    this.packageDetails.PackageDetail.level1 = level1Amount;
    this.packageDetails.PackageDetail.level2 = level2Amount;
    this.packageDetails.PackageDetail.level3 = level3Amount;
    this.packageDetails.PackageDetail.user_id = userData.id;
    this.packageDetails.PackageDetail.username = userData.username;
    console.log(this.packageDetails)
    this.apiCall.userdata(userData.username).subscribe((user) => {
      console.log(user);
     const userBlanace = +user.balnce;
      console.log(typeof userBlanace, userBlanace);
      if(userBlanace >= mainAmount) {
        console.log('you an buy package')
        this.apiCall.ActivePackage(userData.id).subscribe((res) => {
          console.log(res)
          this.packageDetails.Users = res;
          console.log(this.packageDetails)
          this.apiCall.updateLevel(this.packageDetails).subscribe((levelRes) => {
            console.log(levelRes)
            if(levelRes.error == false) {
              this.toast.SuccessToast('Package Activated Successfully', 'Good Job!')
            }
          });
        });
      }
      else{
        console.log('you connot buy package because you do not have anough balacne');
        this.toast.ErrorToast('You do not have enough Balacne please deposite some amount', 'Sorry')
      }
    });
  }
}
