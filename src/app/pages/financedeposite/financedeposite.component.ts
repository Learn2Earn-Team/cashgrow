import { Component } from "@angular/core";
import { check } from "src/app/localStorage/LocalStorage";
import { ApicallService } from "src/app/services/apicall.service";
import { ToastService } from "src/app/services/toast.service";
import { Clipboard } from "@capacitor/clipboard";
import { Router } from "@angular/router";

@Component({
  selector: "app-financedeposite",
  templateUrl: "./financedeposite.component.html",
  styleUrls: ["./financedeposite.component.scss"],
})
export class FinancedepositeComponent {
  public userobj: any = {};
  public user: any;
  public uploadedImage: any = "";
  public image: any = "";
  public depositdetail: any = {
    depositAmount: "950",
    getawey: "",
    tid: "",
  };
  public userDeposits: any = {};

  constructor(
    private apiCall: ApicallService,
    private route: Router,
    public toast: ToastService
  ) {
    this.GetUserData();
  }

  public async GetUserData() {
    this.user = await check("user");
    this.userobj = JSON.parse(this.user);
    this.apiCall.userdeposit(this.userobj?.id).subscribe((res) => {
      this.userDeposits = res;
    });
  }

  public async Auth() {
    const authorizationEndpoint =
      "https://accounts.binance.com/en/oauth/authorize";
    const responseType = "code";

    const clientId = "1123";
    const redirectUri = encodeURIComponent(
      "http://http://localhost:4200/oauth/callback"
    );
    const state = "377f36a4557ab5935b36";
    const scopes = "read";
    const url = `${authorizationEndpoint}?response_type=${responseType}&client_id=${clientId}&redirect_uri=${redirectUri}&state=${state}&scope=${scopes}`;

    window.location.href = url;
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
  public DepositReq() {
    // this.userobj.img = this.image;
    this.userobj.depositdata = this.depositdetail;
    this.apiCall
      .CheckdepositStatus({ user_id: this.userobj.id })
      .subscribe((res) => {
        console.log(res);
        if (res.status != "Pending" && res.error === false) {
          this.apiCall.deposit(this.userobj).subscribe((res) => {
            this.GetUserData();
            this.depositdetail = { getawey: "", tid: "" };
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

  async forEasyPaisa() {
    await Clipboard.write({
      string: "0280565",
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

  async forJazCash() {
    await Clipboard.write({
      string: "00436181",
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
