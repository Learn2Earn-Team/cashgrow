import { Component } from '@angular/core';
import { check } from 'src/app/localStorage/LocalStorage';
import { ApicallService } from 'src/app/services/apicall.service';

@Component({
  selector: 'app-internaltransferdetail',
  templateUrl: './internaltransferdetail.component.html',
  styleUrls: ['./internaltransferdetail.component.scss']
})
export class InternaltransferdetailComponent {
  public userdata: any = {};
  public userobj: any = {};

  public user: any;

  constructor(private apiCall: ApicallService) {
    this.NewUserdata();
  }
  public async NewUserdata() {
    this.user = await check('user');
    this.userobj = JSON.parse(this.user);
    this.apiCall.cashwalltet(this.userobj.username).subscribe((res) => {
      this.userdata = res;
    });
  }
}