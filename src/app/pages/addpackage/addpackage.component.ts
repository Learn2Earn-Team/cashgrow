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

  public withdrawDetail: any = {};
  adddata: any;
  postdata: any;
  packagedata: any;
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
    if(this.withdrawDetail.name&&this.withdrawDetail.maxprice&&this.withdrawDetail.days&&this.withdrawDetail.minprice){
      this.apiCall.postpackage(this.withdrawDetail).subscribe(res=>{
        this.postdata=res;
        console.log(this.postdata);
       
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
