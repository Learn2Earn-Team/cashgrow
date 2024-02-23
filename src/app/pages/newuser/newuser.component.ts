import { Component } from '@angular/core';
import { ApicallService } from 'src/app/services/apicall.service';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.scss']
})
export class NewuserComponent {
  public userdata:any = {};
  pageSize = 20;
  p = 1;
constructor( private apiCall : ApicallService){
    this.NewUserdata();
}
public NewUserdata():void {
    
  this.apiCall.getNewUser().subscribe(res => {
   this.userdata = res;
   console.log(this.NewUserdata)
  })
}
}
