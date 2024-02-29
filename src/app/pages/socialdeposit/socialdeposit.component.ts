import { Component } from '@angular/core';
import { check } from 'src/app/localStorage/LocalStorage';
import { ApicallService } from 'src/app/services/apicall.service';
import { ToastService } from 'src/app/services/toast.service';
import { Clipboard } from '@capacitor/clipboard';
@Component({
  selector: 'app-socialdeposit',
  templateUrl: './socialdeposit.component.html',
  styleUrls: ['./socialdeposit.component.scss'],
})
export class SocialdepositComponent {
  public userobj: any = {};
  public user: any;
  public image: any = '';
  public depositdetail: any = {
    depositAmount: '',
    getawey: 'Trust Wallet',
    tid: '',
  };
  public userDeposits: any = {};
  public uploadedImage: any = '';
  constructor(private apiCall: ApicallService, public toast: ToastService) {
    this.GetUserData();
  }
  public async GetUserData() {
    this.user = await check('user');
    this.userobj = JSON.parse(this.user);
    this.apiCall.userdeposit(this.userobj?.id).subscribe((res) => {
      this.userDeposits = res;
    });
  }
  handleUpload($event: any) {
    const file = $event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64String = reader.result?.toString().split(',')[1];
      this.userobj.img = base64String;
    };
  }
  public DepositReq() {
    // this.userobj.img = this.image;
    this.userobj.depositdata = this.depositdetail;
    this.apiCall
      .CheckdepositStatus({ user_id: this.userobj.id })
      .subscribe((res) => {
        console.log(res);
        if (res.status != 'Pending' && res.error === false) {
          this.apiCall.deposit(this.userobj).subscribe((res) => {
            this.GetUserData();
            this.depositdetail = { tid: '', depositAmount: '', getawey: 'Trust Wallet',};
            this.uploadedImage = '';
            if (res.error === false) {
              this.toast.SuccessToast('Deposit Successfully', 'Good Job!');
              this.GetUserData();
            } else {
              this.toast.ErrorToast('Request Not Sumbit', 'Error');
            }
          });
        } else {
          this.toast.ErrorToast(
            'Your Last Request Still Pending',
            'Only on Request Allow At a time'
          );
        }
      });
  }

  async forEasyPaisa() {
    await Clipboard.write({
      string: '0280565',
    }).then(
      () => {
        this.toast.SuccessToast('Linked Copied to clipboard', 'Successfully!');
      },
      () => {
        console.error('Failed to copy');
      }
    );
    const { type, value } = await Clipboard.read();
    console.log(`Got ${type} from clipboard: ${value}`);
  }

  async forJazCash() {
    await Clipboard.write({
      string: '0x95d728942EcC7bafa3279aD29dE80642dE1Dfb12',
    })
    .then(
      () => {
        this.toast.SuccessToast('Linked Copied to clipboard', 'Successfully!');
      },
      () => {
        console.error('Failed to copy');
      }
    );
    const { type, value } = await Clipboard.read();
    console.log(`Got ${type} from clipboard: ${value}`);
  }
}
