declare var window: any;
import { Component } from "@angular/core";
import { check } from "src/app/localStorage/LocalStorage";
import { ApicallService } from "src/app/services/apicall.service";
import { ToastService } from "src/app/services/toast.service";
import { Router } from "@angular/router";
import detectEthereumProvider from "@metamask/detect-provider";
import { Clipboard } from "@capacitor/clipboard";

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
    depositAmount: "0",
    getawey: "",
    tid: "",
    image: "",
  };
  public userDeposits: any = {};

  public userdata: any = [];

  pageSize = 10;

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
        this.DepositReq("MetaMask");
      })
      .catch((error: any) => {
        this.acountaccess = false;
        this.toast.ErrorToast("Payment Failed", "Rejected");
      });
  }

  public DepositReq(data: any) {
    this.depositdetail.getawey = data;
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

  handleUpload($event: any) {
    const file = $event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64String = reader.result?.toString().split(",")[1];
      this.userobj.img = base64String;
    };
  }
  async forJazCash() {
    await Clipboard.write({
      string: "TKSuN2mN4mx5eY1B4WEgtnPYiVhW3sP4of",
    }).then(
      () => {
        this.toast.SuccessToast("Linked Copied to clipboard", "Successfully!");
      },
      () => {
        console.error("Failed to copy");
      }
    );
    const { type, value } = await Clipboard.read();
    console.log(`Got ${type} from clipboard: ${value}`);
  }
}
