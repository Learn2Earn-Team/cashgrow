import { Component } from '@angular/core';
import { check } from 'src/app/localStorage/LocalStorage';
import { ApicallService } from 'src/app/services/apicall.service';

@Component({
  selector: 'app-expirepackag',
  templateUrl: './expirepackag.component.html',
  styleUrls: ['./expirepackag.component.scss'],
})
export class ExpirepackagComponent {
  public userdata: any = {};

  constructor(private apiCall: ApicallService) {
    // this.NewUserdata();
  }
  // public async NewUserdata() {
  //   this.apiCall.ExpirePackage().subscribe((res) => {
  //     this.userdata = res;
  //   });
  // }
  public table: any = [
    {
      name: ' Muhammmad Ali',
      nameid: '4',
      packagename: 'mypack',
      address: 'street no3',
      street: '5',
      number: '03145734654',
      value: 'iqety',
      pakdate: '32547',
    },
  ];
}
