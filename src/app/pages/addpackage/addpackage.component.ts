import { Component } from '@angular/core';

@Component({
  selector: 'app-addpackage',
  templateUrl: './addpackage.component.html',
  styleUrls: ['./addpackage.component.scss']
})
export class AddpackageComponent {

  public withdrawDetail: any = {
    user_id: '',
    amount: '',
    contact: '',
    jdetail: 'Wallet',
    uname: '',
    name: '',
    services: '',
    net: '',
  };
}
