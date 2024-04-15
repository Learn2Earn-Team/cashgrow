declare var window: any;
import { Component } from "@angular/core";
import { check } from "src/app/localStorage/LocalStorage";
import { ApicallService } from "src/app/services/apicall.service";
import { ToastService } from "src/app/services/toast.service";
import { Router } from "@angular/router";
import detectEthereumProvider from "@metamask/detect-provider";
import { Clipboard } from '@capacitor/clipboard';


@Component({
  selector: "app-financedeposite",
  templateUrl: "./financedeposite.component.html",
  styleUrls: ["./financedeposite.component.scss"],
})
export class FinancedepositeComponent {
  private web3: any;
  public userobj: any = {};
  public user: any;
  public uploadedImage: any = "";
  public image: any = "";
  public accoun: any;

  public auth: any = false;
  public acountaccess: any = false;
  public depositdetail: any = {
    depositAmount: "10",
    getawey: "MetaMask",
    tid: "2uhshedhej",
  };
  public userDeposits: any = {};






  public userdata: any = [];

  public subtotal: any;
  public teamReposrt: any;
  public yesterday: any = 0;
  public today: any = 0;
  public passive: any = 0;
  public addedusers: any = 0;
  public totalOrders: any = 0;
  public l1: any = [];
  public l2: any = [];
  public l3: any = [];
  public l4: any = [];
  public l5: any = [];
  public l6: any = [];
  public l7: any = [];
  pageSize = 10;
  interval: any;
  p = 1;
  public userdetails: any = [];
  status: any;


  constructor(
    private apiCall: ApicallService,
    private route: Router,
    public toast: ToastService
  ) {
    this.Auth();
    this.GetUserData();
  }

  async getAccounts() {
    const data = window.ethereum;
    try {
      const provider: any = await data.request({
        method: "eth_requestAccounts",
      });
      console.log(provider, "user");
      this.accoun = provider;
      if (this.accoun.length > 0) {
        this.acountaccess = true;
      }
    } catch (er) {
      console.log(er, "Connecting error");
    }
  }

  public async GetUserData() {
    this.user = await check("user");
    this.userobj = JSON.parse(this.user);
    this.apiCall.userdeposit(this.userobj?.id).subscribe((res) => {
      this.userDeposits = res;
    });
  }

  public async Auth() {
    const provider: any = await detectEthereumProvider();

    if (provider) {
      this.auth = true;
    } else {
      this.auth = false;
      this.toast.ErrorToast("Please install MetaMask!", "");
    }
  }

  public async sendEthButton() {
    const provider: any = await detectEthereumProvider();
    provider
      .request({
        method: "eth_sendTransaction",
        params: [
          {
            from: this.accoun[0],
            to: "0x02B38cfc2637C951D7F9219ead8ca12B109Fc604",
            value: this.depositdetail.depositAmount,
          },
        ],
      })
      .then((txHash: any) => {
        console.log(txHash, "res");
        this.depositdetail.tid = this.accoun[0];
        this.acountaccess = false;
        this.DepositReq();
      })
      .catch((error: any) => {
        this.acountaccess = false;
        this.toast.ErrorToast("Payment Failed", "Rejected");
      });
  }

  public DepositReq() {
    this.userobj.depositdata = this.depositdetail;
    console.log(this.userobj, "data");
    this.apiCall.activatePackafe(this.userobj.id).subscribe((res) => {
      this.userobj.users = res;
      this.apiCall.deposit(this.userobj).subscribe((res) => {
        this.GetUserData();
        this.depositdetail = { depositAmount: "" };
        this.uploadedImage = "";
        if (res.error === false) {
          this.toast.SuccessToast("Deposit Successfully", "Good Job!");
          this.GetUserData();
          this.route.navigate(["default/index"]);
        }
      });
    });
  }



  async getrefstatus() {
    const user: any = await check("user");
    const userData = JSON.parse(user);
    this.apiCall.myorders(userData.username).subscribe((res3) => {
      if (res3.length > 0) {
        this.apiCall.getrefstatus(res3).subscribe((res2: any) => {
          if (res2?.length > 0) {
            for (let i = 0; i < res2.length; i++) {
              this.status.push({
                message: `Please Renew Your ${res2[i]}$ Package For Team Commissions And Passive Income `,
              });
            }
          }
        });
      }
    });
  }
  public async NewUserdata() {
    this.user = await check("user");
    this.userobj = JSON.parse(this.user);
    await this.apiCall
      .api_getUserTeam(this.userobj.username)
      .subscribe((res) => {
        this.userdetails = res?.allteam;
        console.log(this.userdetails);
        this.l1 = this.userdetails?.filter((res: any) => res?.level === 1);
        this.l2 = this.userdetails.filter((res: any) => res?.level === 2);
        this.l3 = this.userdetails.filter((res: any) => res?.level === 3);
        this.l4 = this.userdetails.filter((res: any) => res?.level === 4);
        this.l5 = this.userdetails.filter((res: any) => res?.level === 5);
        this.l6 = this.userdetails.filter((res: any) => res?.level === 6);
        this.l7 = this.userdetails.filter((res: any) => res?.level === 7);
        console.log(this.l1);
        if (this.userdetails.length > 0) {
          this.apiCall
            .teamreport(this.userdetails, this.userobj.id)
            .subscribe((res1) => {
              this.teamReposrt = res1;
              console.log(this.teamReposrt, "Team Data");
              this.yesterday =
                res1[0]?.previusday != null ? res1[0]?.previusday : 0;
              this.passive =
                res1[0]?.totalPassive != null ? res1[0]?.totalPassive : 0;
              console.log(res1[0]?.todayearning);
              this.today =
                res1[0]?.todayearning != null ? res1[0]?.todayearning : 0;

              this.totalOrders = res1.reduce(
                (i: any, j: any) => i + j.todayOrders,
                0
              );
              this.addedusers = res1.reduce(
                (i: any, j: any) => i + j.todayUsers,
                0
              );
            });
        }
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


