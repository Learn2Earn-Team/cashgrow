import { Component } from '@angular/core';
import { ApicallService } from 'src/app/services/apicall.service';

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
  constructor( public apiCall:ApicallService){
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
this.apiCall.postpackage(this.withdrawDetail).subscribe(res=>{
  this.postdata=res;
  console.log(this.postdata);
})
  }
}
