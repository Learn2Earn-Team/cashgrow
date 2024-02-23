import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { check } from 'src/app/localStorage/LocalStorage';
import { ApicallService } from 'src/app/services/apicall.service';
import { ToastService } from 'src/app/services/toast.service';
import { Clipboard } from '@capacitor/clipboard';
@Component({
  selector: 'app-userdashboarddetails',
  templateUrl: './userdashboarddetails.component.html',
  styleUrls: ['./userdashboarddetails.component.scss']
})
export class UserdashboarddetailsComponent implements OnInit{
  public card: any = [{icon:'icon bi bi-person-heart' , type:'Sponsar' , subtype:''} ,
  {icon:'icon bi bi-envelope-heart-fill' , type:'social Promotion' , subtype:''} , 
  {icon:'icon bi bi-activity' , type:'Status' , subtype:''},
  {icon:'icon bi bi-wallet-fill' , type:'Deposite wallent' , subtype:''} ,
   {icon:'icon bi bi-wallet2' , type:'Cash Balances' , subtype:''} ,
    {icon:'icon bi bi-cash-stack' , type:'Total Earning' , subtype:''},
    {icon:'icon bi-share-fill' , type:'Direct Bonus' , subtype:''} , 
    {icon:'icon  bi-chat-heart-fill' , type:'Social Media' , subtype:''} ,
     {icon:'icon bi bi-hand-index' , type:'BG-Points' , subtype:''},
     {icon:'icon bi bi-trophy' , type:'Rewards' , subtype:''},
     // {icon:'icon bi bi-camera-video' , type:'Vedio Watch' , subtype:'PKR:0.00'},
     // {icon:'icon bi bi-youtube' , type:'Virtual earning' , subtype:'PKR:0.00'},
   ];
   public userUniqeId :any;
   constructor(private route : Router, private toast : ToastService, private apicall : ApicallService) {
    this.userUniqeId = history.state.data
    this.getUserDashoardData(this.userUniqeId);
  }
ngOnInit() {
 this.userUniqeId = history.state.data
  this.getUserDashoardData(this.userUniqeId);
}

ngAfterViewInit(){
  this.userUniqeId = history.state.data
  this.getUserDashoardData(this.userUniqeId);
}

 getUserDashoardData(id:any) {
  console.log(this.card)
  console.log(id)
  this.apicall.getUserDashboardData(id).subscribe(res=>{
    console.log(res)
    this.card[0].subtype = id;
    this.card[1].subtype = res.activePromotion;
    this.card[2].subtype = res.status;
    this.card[3].subtype = res.totalDeposit;
    this.card[4].subtype = res.netBalance;
    this.card[5].subtype = res.earning;
    this.card[6].subtype = res.directBalance;
    this.card[7].subtype = res.SocialMedia + res.watchBalance + res.subscribeBalance;
    this.card[8].subtype = res.totalCoins;
    this.card[9].subtype = res.Rewards;
    // this.card[10].subtype = res.watchBalance;
    // this.card[11].subtype = res.subscribeBalance;
  })
}
async copyUserId() {
  console.log(window.location.origin)
  const url = `https://Maclink.shop/#/registrationform?id=${this.userUniqeId}`;
  await Clipboard.write({
    string: url
  }).then(() =>{
    this.toast.SuccessToast('Linked Copied to clipboard', 'Successfully!')
  },() => {
      console.error('Failed to copy');
    });
  const { type, value } = await Clipboard.read();
  console.log(`Got ${type} from clipboard: ${value}`);
  // navigator.clipboard.writeText(url).then(() => {
  //   console.log(`${url} copied to clipboard`);
  //   this.toast.SuccessToast('Linked Copied to clipboard', 'Successfully!')
  // },() => {
  //   console.error('Failed to copy');
  // })

  // this.route.navigate(['registrationform'], {
  //   state: { data: userData},
  //   queryParams: { id: userData.username },
  // });
}
}
