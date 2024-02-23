import { Component } from '@angular/core';
import { check } from 'src/app/localStorage/LocalStorage';
import { ApicallService } from 'src/app/services/apicall.service';

@Component({
  selector: 'app-activepackag',
  templateUrl: './activepackag.component.html',
  styleUrls: ['./activepackag.component.scss'],
})
export class ActivepackagComponent {
  userData: any = {
    id: '',
    name: '',
    email: '',
    contactNumber: '',
    whatsApp: '',
    company: '',
    bname: '',
    jazzcash: '',
    accoundNumber: '',
    easypaisa: '',
    pin: '',
    username: '',
    InvitedLink: '',
  };
  public userDeposits: any = {};
  pageSize = 20;
  p = 1;
  constructor(private apiCall: ApicallService) {}

  ngOnInit() {
    this.getUserData();
  }

  async getUserData() {
    const user: any = await check('user');
    const userData = JSON.parse(user);
    this.userData = userData;
    this.apiCall.Usersocialpromotion().subscribe((res) => {
      this.userDeposits = res;
      console.log(this.userDeposits);
    });
  }
}
