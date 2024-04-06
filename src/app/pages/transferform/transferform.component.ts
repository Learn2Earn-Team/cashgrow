import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { check } from 'src/app/localStorage/LocalStorage';
import { ApicallService } from 'src/app/services/apicall.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-transferform',
  templateUrl: './transferform.component.html',
  styleUrls: ['./transferform.component.scss'],
})
export class TransferformComponent {
  public voucherBalance: any = 0;
  public userPin: any = 0;
  public user: any = {};
  public userobj: any = {};
  public sender: any;
  public transectionData: any = {};
  public senderBalance: number = 0;
  public recevierBalance: number = 0;
  public userid: any[] = [];
  public userAuth: any = {};
  public userBalance: any = 0;
  public net: any = '';
  constructor(
    private apiCall: ApicallService,
    private route: Router,
    private toast: ToastService
  ) {
    this.user = history.state.data;
    console.log(this.user);
    this.recevierBalance = parseFloat(this.user.balnce);
    this.GetUserData();
  }
  public async GetUserData() {
    this.sender = await check('user');
    this.userobj = JSON.parse(this.sender);
    this.apiCall.userdata(this.userobj.username).subscribe((res) => {
      if (res.error) {
        alert('Transecton Not Completed');
      } else {
        this.userBalance = res?.balnce;

        console.log(this.userBalance);
      }
    });
    this.userPin = this.userobj.pin;
    this.net = this.userobj.balnce;
  }
  public userdata() {
    this.senderBalance = parseFloat(this.userBalance);

    if (this.senderBalance > this.voucherBalance) {
      this.transectionData.sender = this.userobj.username;
      this.transectionData.receiver = this.user.username;
      this.transectionData.amount = this.voucherBalance;
      this.transectionData.pin = this.userPin;
      console.log(this.senderBalance);
      this.transectionData.totalsenderBalance = this.senderBalance;
      this.transectionData.sender_balance =
        this.senderBalance - this.voucherBalance;

      this.transectionData.receiver_balance =
        this.recevierBalance + this.voucherBalance;

      this.userid.push({
        userID: this.userobj.id,
        amount: this.transectionData.sender_balance,
      });
      this.userid.push({
        userID: this.user.id,
        amount: this.transectionData.receiver_balance,
      });
      this.transectionData.userids = this.userid;
      this.userAuth.username = this.userobj.username;
      this.userAuth.pin = this.userPin;
      console.log(this.transectionData.sender_balance);
      console.log(this.voucherBalance);
      console.log(this.transectionData.userids);
 

          this.apiCall
            .InternalTranster(this.transectionData)
            .subscribe((res) => {
              if (res.error) {
                this.toast.ErrorToast('Transection Not Completed', 'Error');
              } else {
                this.route.navigate(['default/index']);
                this.toast.SuccessToast('Transection Completed', 'Good Job');
             
              }
            });
        // }
      // });
    } else {
      alert('Enter Valid Amount');
    }
  }
}
