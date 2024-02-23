import { Component, OnInit } from '@angular/core';
import { ApicallService } from 'src/app/services/apicall.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-dataentry',
  templateUrl: './dataentry.component.html',
  styleUrls: ['./dataentry.component.scss'],
})
export class DataentryComponent implements OnInit {
  public userWallertData: any = {
    id: '',
    watch: '',
    subscribe: '',
    reffe_balance: '',
    sponser_balance: 0,
    bg_coin: '',
    reward: '',
    social_order: '',
    withdraw: 0,
    user_withdraw: '',
    net_balance: '',
  };
  public userDepositData: any = {
    user_id: '',
    username: '',
    amount: '',
    depositamount: 0,
    cashtowallet: 0,
    image: 'Image',
    tid: '123',
    status: 'Aproved',
    isUserActivehHisPackage: 'true',
  };
  allUserData: any;

  public userOrderData: any = {
    id: '',
    name: '',
    username: '',
    email: '',
    package: '',
    details: '',
    link: '',
    code: '',
    pid: '',
    status: '',
    wa_number: '',
  };
  allProducts: any;
  users: any;
  usersForWallet: any;
  products: any;

  public userWithdrawDetail: any = {
    user_id: '',
    amount: '',
    contact: '',
    jdetail: '',
    tdetail: '',
    status: '',
    uname: '',
    name: '',
    services: '',
    net: '',
  };
  constructor(private apicall: ApicallService, private toast: ToastService) {}

  ngOnInit() {
    this.getAlluser();
    this.getAllProducts();
  }

  getAlluser() {
    this.apicall.getAllUser().subscribe((res) => {
      console.log(res);
      this.allUserData = res;
    });
  }

  addUserWallet() {
    console.log(this.userWallertData);
    this.apicall.api_addUserWallet(this.userWallertData).subscribe((res) => {
      console.log(res);
      this.userWallertData = {
        id: '',
        watch: '',
        subscribe: '',
        reffe_balance: '',
        sponser_balance: 0,
        bg_coin: '',
        reward: '',
        social_order: '',
        withdraw: 0,
        user_withdraw: '',
        net_balance: '',
      };
      if (res.error == false) {
        this.toast.SuccessToast('Data Added', 'Good Job');
      }
    });
  }
  addUserDeposit() {
    console.log(this.userDepositData);
    this.apicall.UserDepost(this.userDepositData).subscribe((res) => {
      console.log(res);
      this.userDepositData = {
        user_id: '',
        username: '',
        amount: '',
        depositamount: 0,
        cashtowallet: 0,
        image: '',
        tid: '',
        status: 'Aproved',
        isUserActivehHisPackage: 'true',
      };
      if (res.error == false) {
        this.toast.SuccessToast('Data Added', 'Good Job');
      }
    });
  }

  getAllProducts() {
    this.apicall.api_getAllProduct().subscribe((products) => {
      this.allProducts = products.data;
      console.log(this.allProducts);
    });
  }

  selectUserForOrder($event: any) {
    console.log($event);
    this.userOrderData.id = $event.id;
    this.userOrderData.name = $event.name;
    this.userOrderData.username = $event.username;
    this.userOrderData.email = $event.email;
    console.log(this.userOrderData);
  }
  selectUserForWallet($event: any) {
    this.userWallertData.id = $event.id;
    console.log(this.userWallertData);
      navigator.clipboard.writeText($event.username).then(() => {
        console.log(`${$event.username} copied to clipboard`);
        this.toast.SuccessToast('User Id Copied to clipboard', 'Successfully!')
      },() => {
        console.error('Failed to copy');
      })
  }
  selectUserForDeposit($event: any) {
    this.userDepositData.user_id = $event.id;
    this.userDepositData.username = $event.username;
    console.log(this.userDepositData);
      navigator.clipboard.writeText($event.username).then(() => {
        console.log(`${$event.username} copied to clipboard`);
        this.toast.SuccessToast('User Id Copied to clipboard', 'Successfully!')
      },() => {
        console.error('Failed to copy');
      })
  }
  selectProductsForOrder($event: any) {
    console.log($event);
    this.userOrderData.pid = $event.id;
    this.userOrderData.package = $event.name;
    this.userOrderData.details = $event.description;
    console.log(this.userOrderData);
  }
  addUserOrder() {
    console.log(this.userOrderData);
    this.apicall.api_addUserOrder(this.userOrderData).subscribe((res) => {
      console.log(res);
      this.userOrderData = {
        id: '',
        name: '',
        username: '',
        email: '',
        package: '',
        details: '',
        link: '',
        code: '',
        pid: '',
        status: '',
        wa_number: '',
      };
      if (res.error == false) {
        this.toast.SuccessToast('Data Added', 'Good Job');
      }
    });
  }

  selectUserForWithdraw($event: any) {
    console.log($event);
    this.userWithdrawDetail.user_id = $event.id;
    this.userWithdrawDetail.uname = $event.username;
    this.userWithdrawDetail.name = $event.name;
  }

  addUserWithdraw() {
    console.log(this.userWithdrawDetail);
    this.apicall
      .api_addUserWithdraw(this.userWithdrawDetail)
      .subscribe((res) => {
        console.log(res);
        this.userWithdrawDetail = {
          user_id: '',
          amount: '',
          contact: '',
          jdetail: '',
          tdetail: '',
          status: '',
          uname: '',
          name: '',
          services: '',
          net: '',
        };
        if (res.error == false) {
          this.toast.SuccessToast('Data Added', 'Good Job');
        }
      });
  }
}
