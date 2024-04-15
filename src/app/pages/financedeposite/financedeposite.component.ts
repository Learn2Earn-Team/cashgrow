declare var window: any;
import { Component } from "@angular/core";
import { check } from "src/app/localStorage/LocalStorage";
import { ApicallService } from "src/app/services/apicall.service";
import { ToastService } from "src/app/services/toast.service";
import { Router } from "@angular/router";
import detectEthereumProvider from "@metamask/detect-provider";

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
  teamReposrt: any;
  yesterday: any;
  userdetails: any;
  l1: any;
  l2: any;

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
        console.log(this.l1);
        if (this.userdetails.length > 0) {
          this.apiCall
            .teamreport(this.userdetails, this.userobj.id)
            .subscribe((res1) => {
              this.teamReposrt = res1;
              console.log(this.teamReposrt, "Team Data");
              this.yesterday =
                res1[0]?.previusday != null ? res1[0]?.previusday : 0;
            
            });
        }
      });
  }
}
