declare var window: any;
import { Component } from "@angular/core";
import { check } from "src/app/localStorage/LocalStorage";
import { ApicallService } from "src/app/services/apicall.service";
import { ToastService } from "src/app/services/toast.service";
import { Clipboard } from "@capacitor/clipboard";
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
    depositAmount: "",
    getawey: "MetaMask",
    tid: "",
  };
  public userDeposits: any = {};

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
            to: "0xda2eD321763EA95f6Fcf2DEb8C53efb375685B6F",
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
    this.apiCall
      .CheckdepositStatus({ user_id: this.userobj.id })
      .subscribe((res) => {
        console.log(res);
        if (res.status != "Pending" && res.error === false) {
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
        } else {
          this.toast.ErrorToast(
            "Deposit Request Not Submint",
            "You Previus Request is Still Pending"
          );
        }
      });
  }
}
