import { Component } from '@angular/core';
import { ApicallService } from 'src/app/services/apicall.service';
import { ToastService } from 'src/app/services/toast.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addpackage',
  templateUrl: './addpackage.component.html',
  styleUrls: ['./addpackage.component.scss']
})
export class AddpackageComponent {

  public withdrawDetail: any = {
    name: '',
    price: '',
    l1: '',
    l2: '',
    l3: '',
    l4: '',
    l5: '',
    l6: '',
    l7:''
  };
  adddata: any;
  postdata: any;
  ddd: any;
  constructor( public apiCall:ApicallService,public toast:ToastService,public router:Router) {
    console.log(this.withdrawDetail);
  }
  ngOnInit(){
  // this.getdata();
  }
  getdata(){
    // this.apiCall.getpackage().subscribe((res:any)=>{
    //   this.adddata=res;
    //   console.log(this.adddata);
    //  })
  }
  Submit(){
    if(this.withdrawDetail.name&&this.withdrawDetail.price){
      this.apiCall.postpackage(this.withdrawDetail).subscribe(res=>{
        this.postdata=res;
        console.log(this.postdata);
        this.apiCall.getPackages().subscribe((res:any)=>{
          this.ddd=res;
          console.log(this.ddd);
        })
        // console.log(res.error)
        this.toast.SuccessToast('Linked Copied to clipboard', 'Successfully!');
        this.router.navigate(['./default/promotionsocial'])
      })
    }
    else{
      this.toast.ErrorToast('Data is not posted', 'Failed!');
    }

  }
}
