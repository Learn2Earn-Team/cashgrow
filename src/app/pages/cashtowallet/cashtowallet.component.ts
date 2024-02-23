import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { check } from 'src/app/localStorage/LocalStorage';
import { ApicallService } from 'src/app/services/apicall.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-cashtowallet',
  templateUrl: './cashtowallet.component.html',
  styleUrls: ['./cashtowallet.component.scss']
})
export class CashtowalletComponent implements OnInit{


  public checkUserPin : any = {username:'', pin:''}
  public cachDetail : any = {user_id:'', username:'', amount:'', tid:''}
  public userBlanace: number | undefined;
  showBalanceMessage: any = null;
  constructor(public router : Router, private apicall : ApicallService,  private toast : ToastService) {}


  ngOnInit() {
  
  }
  async checkBalacne($event:any) {
    console.log($event.target.value)
    const user : any = await check("user");
    const userData = JSON.parse(user)
    console.log(userData)
    this.apicall.userdata(userData.username).subscribe(user=>{
      console.log(user)
      this.userBlanace = + user.balnce;
      console.log(typeof this.userBlanace,this.userBlanace)
      if($event.target.value > this.userBlanace) {
          this.showBalanceMessage = `You have only Rs. ${this.userBlanace} balance`;
        console.log("you have not balacne")
      }
      else{
        this.showBalanceMessage = '';
      }
    })
  }

async depositCash() {
    const user : any = await check("user");
    const userData = JSON.parse(user)
    console.log(userData);
    this.checkUserPin.username = userData.username;
    this.cachDetail.user_id = userData.id;
    this.cachDetail.username = userData.username;
    this.cachDetail.tid = "Cash To Wallet"
    this.apicall.CheckUser(this.checkUserPin).subscribe(res=>{
      console.log(res)
      if(res.error ==  false) {
        console.log(this.cachDetail)
        this.apicall.cashtoWallet(this.cachDetail).subscribe(cash=>{
          console.log(cash)
          if(cash.error == false) {
            this.toast.SuccessToast('Your Cash has been Deposit', 'Congratulations');
            this.router.navigate(['/default/cashdetails'])
          }
        })
      }
    })
  }

  goToNext() {
    this.router.navigate(['de'])
  }


}
