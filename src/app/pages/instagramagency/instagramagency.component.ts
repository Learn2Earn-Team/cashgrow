import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { check } from 'src/app/localStorage/LocalStorage';
import { ApicallService } from 'src/app/services/apicall.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-instagramagency',
  templateUrl: './instagramagency.component.html',
  styleUrls: ['./instagramagency.component.scss'],
})
export class InstagramagencyComponent implements OnInit{
  public name = 'Instagram';
  public InstaData: any[] = [];
  public userDeposits: any = {};
  public isUpdate = true;
  public packageData : any = {id: '', name:'', meta_title:'', meta_description:'', meta_keyword:'', cat:'',
  description:'', price:'', order_by:'', distribute_price:0, image:'', deliver_time:'', type:''}
  userData: any;
  constructor(private apiCall: ApicallService, private route: Router, private toast : ToastService) {
    this.getTiktokRecord();
  }
  async ngOnInit(): Promise<void> {
    const user : any = await check("user");
  this.userData = JSON.parse(user)
  console.log(this.userData)
  }
  public getTiktokRecord(): void {
    this.apiCall.getProduct(this.name).subscribe((res) => {
      this.InstaData = res.data;
    });
  }
  async goTonext(item:any){
    const user : any = await check("user");
    const userData = JSON.parse(user)
    console.log(userData)
    console.log(item) 
    this.apiCall.checkpackage(userData.id).subscribe(res=>{
      console.log(res)
      if(res.error == false) {
        this.apiCall.getUserDepositAmount(userData.id).subscribe((res) => {
          console.log(res)
          this.userDeposits = res[0];
          console.log(this.userDeposits);
          const productPrice = + item.price;
          const despositAmount = + this.userDeposits.amount
          console.log('productPrice', productPrice, 'despositAmount', despositAmount)
          if(despositAmount >=  productPrice) {
              console.log('valid')
              this.route.navigate(['buysocial'], {state : {data: item}})
          }
          else {
            console.log('unvalid')
            this.toast.ErrorToast(`Please Upgrade Your Package! You have only Rs. ${despositAmount} ammount in your deposite wallet`, 'Alert!')
          }
        });
  
      }
      else {
        this.toast.ErrorToast('Please Upgrade Your Package', 'Alert!')
      }
  }) 
  
  }
  activeUpdatePackage(item:any) {
    console.log(item)
    this.isUpdate = false;
    this.packageData = item;
    console.log(this.packageData)
  }
  
  updatePackage() 
  { 
    console.log(this.packageData)
    this.apiCall.api_updatePackage(this.packageData).subscribe(res=>{
      console.log(res)
      this.getTiktokRecord();
      this.toast.SuccessToast('Package Updated', 'Good Job!')
      this.isUpdate = true;
    })
  }
  
  cancelUpdate() {
    this.getTiktokRecord();
    this.isUpdate = true;
  }
}
