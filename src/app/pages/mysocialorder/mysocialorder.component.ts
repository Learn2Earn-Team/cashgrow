import { Component } from '@angular/core';
import { check } from 'src/app/localStorage/LocalStorage';
import { ApicallService } from 'src/app/services/apicall.service';

@Component({
  selector: 'app-mysocialorder',
  templateUrl: './mysocialorder.component.html',
  styleUrls: ['./mysocialorder.component.scss']
})
export class MysocialorderComponent {
  // public id = 56125;
  public userOrder: any[] = [];
  pageSize = 20;
  p = 1;
constructor( private apiCall : ApicallService){
  this.getUserOrder();
}
public async getUserOrder() {
  const user : any = await check("user");
  const userData = JSON.parse(user)
  console.log(userData)
  this.apiCall.getuserOrders(userData.id).subscribe(res => {
    console.log(res)
      this.userOrder = res;
  })
}
}
