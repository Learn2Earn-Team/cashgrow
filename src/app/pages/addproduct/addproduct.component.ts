import { Component, OnInit } from '@angular/core';
import { ApicallService } from 'src/app/services/apicall.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit{

  public packageData : any = {name:'', meta_title:'', meta_description:'', meta_keyword:'', cat:'',
   description:'', price:'', order_by:'', distribute_price:0, image:'', deliver_time:'', type:''}

    constructor(private apicall : ApicallService, private toast : ToastService) {}
  ngOnInit() {

  }

uploadImage($event:any) {
    console.log($event)
    console.log($event.target.files[0])
    const file = $event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64String = reader.result?.toString().split(',')[1];
      console.log(base64String);
        this.packageData.image = base64String;
    };
  }

addSocailPackages() {
  console.log(this.packageData)
  this.apicall.addSocialsProduct(this.packageData).subscribe(res=>{
    console.log(res)
    this.packageData = {name:'', meta_title:'', meta_description:'', meta_keyword:'', cat:'',
   description:'', price:'', order_by:'', distribute_price:0, image:'', deliver_time:'', type:''}

    if(res.error == false) {
      this.toast.SuccessToast('Package Added', 'Good Job!')
    }
  })
}

}
