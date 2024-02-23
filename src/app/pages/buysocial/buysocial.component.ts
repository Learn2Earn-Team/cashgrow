import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { check } from 'src/app/localStorage/LocalStorage';
import { ApicallService } from 'src/app/services/apicall.service';

@Component({
  selector: 'app-buysocial',
  templateUrl: './buysocial.component.html',
  styleUrls: ['./buysocial.component.scss'],
})
export class BuysocialComponent {
  public cart: any = {};
  public OrderData: any = {};
  public userobj: any = {};
  public user: any;
  public orderDetail: any = {
    link: '',
    videoCode: '',
    whatsApp: '',
  };
  constructor(private route: Router, private apiCall: ApicallService) {
    this.cart = history.state.data;
  }
  public async Order() {
    this.user = await check('user');
    this.userobj = JSON.parse(this.user);
    this.userobj.orderdetail = this.orderDetail;
    this.userobj.product = this.cart;
    this.apiCall.Order(this.userobj).subscribe((res) => {
      if (res.error === false) {
        this.route.navigate(['default/index']);
      } else {
        alert('Order Not Created');
      }
    });
  }
}
