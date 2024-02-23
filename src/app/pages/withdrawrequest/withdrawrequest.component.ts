import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { check } from 'src/app/localStorage/LocalStorage';
import { ApicallService } from 'src/app/services/apicall.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-withdrawrequest',
  templateUrl: './withdrawrequest.component.html',
  styleUrls: ['./withdrawrequest.component.scss'],
})
export class WithdrawrequestComponent {
  public userdata: any = {};
  public userobj: any = {};
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
  public checkUserPin: any = { username: '', pin: '' };
  public user: any;
  public userBlanace: number | undefined;
  showBalanceMessage: any = null;

  constructor(
    private apiCall: ApicallService,
    private toast: ToastService,
    private route: Router
  ) {}

  async checkBalacne($event: any) {
    console.log($event.target.value);
    const user: any = await check('user');
    const userData = JSON.parse(user);
    console.log(userData);
    this.apiCall.userdata(userData.username).subscribe((user) => {
      console.log(user);
      this.userBlanace = +user.balnce;
      console.log(typeof this.userBlanace, this.userBlanace);
      if ($event.target.value > this.userBlanace) {
        this.showBalanceMessage = `You have only Rs. ${this.userBlanace} balance`;
        console.log('you have not balacne');
      } else {
        this.showBalanceMessage = '';
      }
    });
  }

  public async NewUserdata() {
    this.user = await check('user');
    this.userobj = JSON.parse(this.user);

    // this.withdrawDetail.contact = this.userobj.contactNumber;
    this.withdrawDetail.name = this.userobj.name;
    this.withdrawDetail.uname = this.userobj.username;
    this.checkUserPin.username = this.userobj.username;
    this.withdrawDetail.user_id = this.userobj.id;
    console.log(this.checkUserPin);
    this.withdrawDetail.services = this.withdrawDetail.amount * (5 / 100);
    console.log(this.withdrawDetail.amount);
    this.withdrawDetail.net =
      this.withdrawDetail.amount - this.withdrawDetail.services;
    console.log(this.withdrawDetail.net);
    this.apiCall.CheckWithdrawStatus(this.userobj.id).subscribe((res) => {
      if (
        res.status === 'Approve' ||
        (res.status === 'Rejected' && res.error === false)
      ) {
        // this.apiCall.CheckUser(this.checkUserPin).subscribe((res) => {
        //   console.log(res);
          // if (res.error == false) {
            this.apiCall.userdata(this.userobj.username).subscribe((res) => {
              console.log('test',res)
              const varriable = +res.balnce;
              console.log(varriable, 'test');
              console.log(this.withdrawDetail.net);
              if (varriable >= 10 && this.withdrawDetail.net >= 10) {
                this.apiCall
                  .withdrawrequest(this.withdrawDetail)
                  .subscribe((res) => {
                    if (res.error == false) {
                      this.toast.SuccessToast(
                        'Your Withdraw request has been sent',
                        'Congratulations'
                      );
                      this.route.navigate(['default/withdrawhistory']);
                    } else {
                      this.toast.ErrorToast(
                        'Your Withdraw request Faild',
                        'You Enter invalid Amount'
                      );
                    }
                  });
              } else {
                this.toast.ErrorToast(
                  'Error',
                  'You Have not Sufficent Balance'
                );
              }
            });
          // }
          //  else {
          //   this.toast.ErrorToast('Incorrect Pin Code', 'Error');
          // }
        // });
      } else {
        this.toast.ErrorToast(
          'Withraw Request Not Submint',
          'You Previus Request is Still Pending'
        );
      }
    });
  }
}
