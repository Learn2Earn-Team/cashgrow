import { Component } from '@angular/core';
import { check } from 'src/app/localStorage/LocalStorage';
import { ApicallService } from 'src/app/services/apicall.service';
import { ToastService } from 'src/app/services/toast.service';
@Component({
  selector: 'app-reward',
  templateUrl: './reward.component.html',
  styleUrls: ['./reward.component.scss']
})
export class RewardComponent {
  userTeem: any;
  reward: any;
  // total: any;
  indirect_total: number=0;
  direct_total: number=0;
  indirectdata: any;
  directdata: any;
  amountreward: any;
  rewardreq: any;
  constructor( public apiCall:ApicallService,public toast:ToastService){  }
  ngOnInit(): void {
    this.userteam();
    this.aprovedreward();
  }
  public hundred:any=[{RewardName:'Bronze',direct:400,indirect:600,reward:50},{RewardName:'Silver',direct:1000,indirect:1500,reward:100},
    {RewardName:'Gold',direct:2000,indirect:3000,reward:300},{RewardName:'Platinum',direct:4000,indirect:6000,reward:500},{RewardName:'Daimond',direct:10000,indirect:15000,reward:1200},]
data:any
async userteam(){
  const user: any = await check('user');
  const userData = JSON.parse(user);
  console.log(userData);
  this.apiCall.userteam(userData.username).subscribe(res=>{
    this.userTeem=res;
    console.log( "user", this.userTeem);
    this.formatdata(res);
  })
}

  outputAry: {direct_total:number,indirect_total:number,direct_userId:number,indirect_userId:number}[] = []
  formatdata(res:any){
    let maxLength = res.direct.length >= res.indirect.length? res.direct.length:res.indirect.length;
    for(let i=0;i<maxLength; i++){
      let temp = {
        direct_total: res.direct[i]?.total,
        indirect_total: res.indirect[i]?.total,
        direct_userId: res.direct[i]?.userId,
        indirect_userId: res.indirect[i]?.userId,
      }
    this.outputAry.push(temp);
   const arr1 = [ this.outputAry[i].indirect_total];
   const indirect= arr1.reduce((a: number, b: number) => {
       return a + b;
   }, 0);
this.indirectdata=indirect;
   console.log('Indirect',this.indirectdata);
   const arr = [ this.outputAry[i].indirect_total];
   const direct= arr.reduce((a: number, b: number) => {
       return a + b;
   }, 0);
this.directdata=direct;
   console.log('direct',this.directdata);
    }
  }
  async bbb(item:any){   
    console.log(item);
    if ( this.directdata>=400&&this.indirectdata>= 600) {
      this.amountreward=50
    console.log('amount 50');
    this.post();
    }
    else if(this.directdata>=1000&&this.indirectdata>= 1500){
    this.amountreward=100
console.log('amount 100');
this.post();
    } 
     else if(this.directdata>=2000&&this.indirectdata>=3000){
      console.log('amount 300');
    this.amountreward=300
    this.post();
          }
          else if(this.directdata>=4000&&this.indirectdata>= 6000){
            console.log('amount 500');
            this.amountreward=500;
    this.post();
                }
    else if(this.directdata>=10000&&this.indirectdata>=25000) {
      console.log('amount 1200');
      this.amountreward=1200;
    this.post();
    }
    else{
      this.toast.ErrorToast("Not Eligible for apply ","Error")
    }
  }
 async post(){
  const user: any = await check('user');
  const userData = JSON.parse(user);
  console.log(userData);
  
  const data={
    user_id:userData.id,
    amount:this.amountreward
  }
  console.log(data);
      this.apiCall.reward(data).subscribe(res=>{
this.reward=res;
console.log(this.reward);
this.toast.SuccessToast("Apply Succsessfully","Good Job!")
      });
}
aprovedreward(){
  this.apiCall.approveReward().subscribe(res=>{
    this.rewardreq=res;
    console.log(this.rewardreq);
  })
}
}

