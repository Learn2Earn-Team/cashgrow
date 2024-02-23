import { Component } from '@angular/core';
import { check } from 'src/app/localStorage/LocalStorage';
import { ApicallService } from 'src/app/services/apicall.service';

@Component({
  selector: 'app-cashwalletdetails',
  templateUrl: './cashwalletdetails.component.html',
  styleUrls: ['./cashwalletdetails.component.scss'],
})
export class CashwalletdetailsComponent {
  public userdata: any = {};
  public userobj: any = {};

  public user: any;

  constructor(private apiCall: ApicallService) {
    this.NewUserdata();
  }
  public async NewUserdata() {
    this.user = await check('user');
    this.userobj = JSON.parse(this.user);
    this.apiCall.getCashToWallet(this.userobj.id).subscribe((res) => {
      console.log(res)
      this.userdata = res;
    });
  }
}
