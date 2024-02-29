import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Toast } from 'ngx-toastr';
import { check } from 'src/app/localStorage/LocalStorage';
import { ApicallService } from 'src/app/services/apicall.service';
import { ToastService } from 'src/app/services/toast.service';
import { ApiService } from 'src/app/api.service';
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
  public active:any=[{id:1,intrest: 1,PackageName:'Basic',total:356,mainAmount:10,c_Balance:20},
    {id:2,intrest: 1,total:356,PackageName:'Prime',mainAmount:20,c_Balance:20},
    {id:3,intrest: 1,total:356,PackageName:'Prime Plus',mainAmount:30,c_Balance:20},
    {id:4,intrest: 1,total:356,PackageName:'Premium',mainAmount:40,c_Balance:20},
    {id:5,intrest: 1,total:356,PackageName:'Premium Plus',mainAmount:50,c_Balance:20}]
  
  public userDeposits: any = {};
  PackageDetails: any;
  alldata: any;
//   public packageDetails : any = {PackageDetails:{
//   mainAmount:'',
//   level1:'',
//   level2:'',
//   level3:'',
//   user_id:'',
//   username:''
// },Users:[]}
  constructor(
    // private apiCall: ApicallService,
    private route: Router,
    private toast: ToastService,
    public apicall:ApiService,
    public apiCall:ApicallService
  ) {
  this.apicall.getdata().subscribe(res=>{
    this.PackageDetails=res;
    console.log(this.PackageDetails);
    console.log(this.PackageDetails[0].levelAmount)
  })
  }

  ngOnInit() {
    this.getUserData();
    this.getCurrentTime();
    this.getdata();
  }
   getdata(){
    this.apiCall.getPackages().subscribe((res:any)=>{
      this.alldata=res;
      console.log(this.alldata)
    })
   }
// promotionsocial.component.ts

getCurrentTime() {
  const currentTime = new Date();
  const options : Intl.DateTimeFormatOptions =  {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
    timeZone: 'UTC' // You can set a specific timezone if needed
  }
  this.active.activeTime = currentTime.toLocaleString('en-US', options);
  console.log('Current Time', this.active.activeTime);
}
time(){
  this.active.currentT=this.active.activeTime;
  console.log(this.active.currentT);
  if(this.active.currentT>this.active.activeTime){
    console.log('You get 1 persent');
  }
  else{
    console.log('Time Remaining ');
  }
}
   activep(item:any){
if(this.active[item].mainAmount<=this.active[item].c_Balance){
  this.active[item].persent=this.active[item].intrest/100;
// console.log('One Day Intrest',this.active[item].persent);
this.active[item].pertotal=this.active[item].persent*this.active[item].total;
// console.log(  'Total Year Intrest',this.active[item].pertotal);
this.active[item].YearIntrest=this.active[item].persent*this.active[item].mainAmount;
console.log(this.active[item].mainAmount);
console.log(this.active[item].id)
console.log('Total Year Intrest ',this.active[item].YearIntrest);
console.log('User Id',this.userData.username);
console.log("You have Successfully Activated Package")
this.getCurrentTime();
  }
  else{
    console.log("You Have not successfully  activate the package");
  }}
// getcolor(index:number){
//  return index===1 ? 'black':'transparent'
// }
  async getUserData() {
    const user: any = await check('user');
    const userData = JSON.parse(user);
    this.userData = userData;
    console.log(this.userData);
    // this.apiCall.getUserDepositAmount(this.userData?.id).subscribe((res) => {
    //   this.userDeposits = res[0];
    //   console.log(this.userDeposits);
    // });
  }

  async checkBalacne() {
    const user: any = await check('user');
    const userData = JSON.parse(user);
    console.log(userData);
    // this.apiCall.userdata(userData.username).subscribe((user) => {
    //   console.log(user);
    //   // this.userBlanace = +user.balnce;
    //   // console.log(typeof this.userBlanace, this.userBlanace);
    //   // if ($event.target.value > this.userBlanace) {
    //   //   // this.showBalanceMessage = `You have only Rs. ${this.userBlanace} balance`;
    //   //   // console.log('you have not balacne');
    //   // } else {
    //   //   // this.showBalanceMessage = '';
    //   // }
    // });
  }

  public async ActivePackage(mainAmount:number, level1Amount:any,level2Amount:any,level3Amount:any,level4Amount:any,level5Amount:any,level6Amount:any) {
    const user: any = await check('user');
    const userData = JSON.parse(user);
    console.log(userData);
    console.log(mainAmount, level1Amount, level2Amount, level3Amount, level4Amount, level5Amount,level6Amount)
    this.PackageDetails.mainAmount = mainAmount;
    this.PackageDetails.level1 = level1Amount;
    this.PackageDetails.level2 = level2Amount;
    this.PackageDetails.level3 = level3Amount;
    this.PackageDetails.level4 = level4Amount;
    this.PackageDetails.level5 = level5Amount;
    this.PackageDetails.level6 = level6Amount;
    this.PackageDetails.user_id = userData.id;
    this.PackageDetails.username = userData.username;
    console.log(this.PackageDetails)
    // this.apiCall.userdata(userData.username).subscribe((user) => {
    //   console.log(user);
    //  const userBlanace = +user.balnce;
    //   console.log(typeof userBlanace, userBlanace);
    //   if(userBlanace >= mainAmount) {
    //     console.log('you an buy package')
    //     this.apiCall.ActivePackage(userData.id).subscribe((res) => {
    //       console.log(res)
    //       this.Users = res;
    //       console.log(this.packageDetails)
    //       this.apiCall.updateLevel(this.packageDetails).subscribe((levelRes) => {
    //         console.log(levelRes)
    //         if(levelRes.error == false) {
    //           this.toast.SuccessToast('Package Activated Successfully', 'Good Job!')
    //         }
    //       });
    //     });
    //   }
    //   else{
    //     console.log('you connot buy package because you do not have anough balacne');
    //     this.toast.ErrorToast('You do not have enough Balacne please deposite some amount', 'Sorry')
    //   }
    // });
  }
}
