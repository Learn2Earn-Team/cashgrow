import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Toast } from "ngx-toastr";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { check } from "src/app/localStorage/LocalStorage";
import { ApicallService } from "src/app/services/apicall.service";
import { ToastService } from "src/app/services/toast.service";
@Component({
  selector: "app-promotionsocial",
  templateUrl: "./promotionsocial.component.html",
  styleUrls: ["./promotionsocial.component.scss"],
})
export class PromotionsocialComponent implements OnInit {
  hasClickedAddPackage: boolean = false;
  balance: any;
  userData: any = {
    id: "",
    name: "",
    email: "",
    contactNumber: "",
    whatsApp: "",
    company: "",
    bname: "",
    jazzcash: "",
    accoundNumber: "",
    easypaisa: "",
    pin: "",
    username: "",
    InvitedLink: "",
  };
  buttonClicked: boolean = false;
  // public alldata:any;
  public alldata: any = [
    {
      maxprice: 100,
      minprice: 10,
      name: "BASIC",
      days: "180",
      percentage: 1.0,
    },
    {
      maxprice: 1000,
      minprice: 500,
      name: "PRIME",
      days: "120",
      percentage: 1.5,
    },
    {
      maxprice: 5000,
      minprice: 2000,
      name: "PRIME PLUS",
      days: "90",
      percentage: 2.0,
    },
    {
      maxprice: 15000,
      minprice: 10000,
      name: "PREMIUM",
      days: "72",
      percentage: 2.5,
    },
    {
      maxprice: 25000,
      minprice: 20000,
      name: "PREMIUMN PLUS",
      days: "60",
      percentage: 3.0,
    },
  ];

  public userDeposits: any = {};
  userdataarray: any;
  persent: any;
  persenttotal: any;
  yearintrest: any;
  activeTime: any;
  currentT: any;
  todaypersenttotal = 0;
  res: any;
  constructor(
    public modalService: NgbModal,
    // private apiCall: ApicallService,
    private route: Router,
    private toast: ToastService,
    public apiCall: ApicallService
  ) {}

  ngOnInit() {
    this.getUserData();
    this.getCurrentDay();
    // this.getdata();
    this.userdata1();
    this.checkBalacne();
  }

  getCurrentDay() {
    const currentTime = new Date();
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
    };
    const currentDay = currentTime.toLocaleDateString("en-US", options);
    console.log("Current Day:", currentDay);
  }

  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title" })
      .result.then(
        (result) => {},
        (reason) => {}
      );
  }
  getCurrentTime() {
    const currentTime = new Date();
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
      timeZone: "UTC",
    };
    this.activeTime = currentTime.toLocaleString("en-US", options);
    console.log("Current Time", this.activeTime);
  }

  activep(item: any, ind: any, modal: any) {
    const data = {
      pid: ind,
      days: item.days,
      username: this.userdataarray.username,
      balance: +this.balance,
      user_id: this.userdataarray.id,
    };

    if (
      +item.maxprice >= +data.balance &&
      +item.minprice <= +data.balance &&
      +this.userdataarray.balnce >= +this.balance
    ) {
      this.apiCall.orders(data).subscribe((res) => {
        if (res.error === false) {
          modal.close();
          this.balance = "";
          this.toast.SuccessToast("Invest Succsessfully", "Good Job!");
          this.userdata1();
        } else {
          this.toast.ErrorToast("Somthing Went Wrong", "Error");
        }
        console.log(res);
        this.res = res;
        console.log(this.userdataarray.balnce);
      });
    } else {
      this.toast.ErrorToast("Somthing Went Wrong", "Error");
    }
  }

  async getUserData() {
    const user: any = await check("user");
    const userData = JSON.parse(user);
    this.userData = userData;
    console.log(this.userData);
  }

  async checkBalacne() {
    const user: any = await check("user");
    const userData = JSON.parse(user);
    console.log(userData);
    this.apiCall.userdata(userData.username).subscribe((user) => {
      console.log(user);
    });
  }

  async userdata1() {
    const userz: any = await check("user");
    const userData = JSON.parse(userz);
    console.log(userData);
    this.apiCall.userdata(userData.username).subscribe((res: any) => {
      this.userdataarray = res;
      console.log(this.userdataarray);
    });
  }
}
