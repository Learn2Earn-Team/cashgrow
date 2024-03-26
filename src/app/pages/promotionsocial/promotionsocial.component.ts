import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Toast } from "ngx-toastr";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { check } from "src/app/localStorage/LocalStorage";
import { ApicallService } from "src/app/services/apicall.service";
import { ToastService } from "src/app/services/toast.service";
import { ApiService } from "src/app/api.service";
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
    public apicall: ApiService,
    public apiCall: ApicallService
  ) {}

  ngOnInit() {
    this.getUserData();
    this.getCurrentDay();
    // this.getdata();
    this.userdata1();
    this.checkBalacne();
  }
  // async getdata() {
  //   const user: any = await check('user');
  //   const userData = JSON.parse(user);
  //   this.apiCall.getPackages(userData.username).subscribe((res: any) => {
  //     this.alldata = res;
  //     console.log(this.alldata);
  //   })
  // }
  // promotionsocial.component.ts
  getCurrentDay() {
    const currentTime = new Date();
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long", // Specify 'long' for the full name of the day of the week
    };
    const currentDay = currentTime.toLocaleDateString("en-US", options);
    console.log("Current Day:", currentDay);
  }

  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title" })
      .result.then(
        (result) => {
          // this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
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
      pid: ind + 1,
      days: item.days,
      username: this.userdataarray.username,
      balance: +this.balance,
      user_id: this.userdataarray.id,
    };
    console.log(data, "data");
    if (
      +item.maxprice >= +data.balance &&
      +item.minprice <= +data.balance &&
      +this.userdataarray.balnce >= +this.balance
    ) {
      this.apiCall.orders(data).subscribe((res) => {
        if (res.error === false) {
          modal.close();
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

    // console.log(days,pid)
    //   this.userdata1();
    //   this.getdata();
    //   if (this.alldata[item].price <= 1000) {
    //     this.persent = this.alldata[item].price / 100;
    //     console.log('One Day Interest', this.persent);
    // console.log(this.userdataarray.balnce);
    //     // Calculate total yearly interest
    //     this.persenttotal = this.persent * 365;
    //     console.log('Total Yearly Interest', this.persenttotal);

    //     // Set up a timer to add 1% of the price every 24 hours
    //     setInterval(() => {
    //       // Add 1% of the price to persenttotal
    //       this.todaypersenttotal += this.alldata[item].price / 100;

    //       // Log the updated total interest
    //       console.log('Updated Total Yearly Interest', this.todaypersenttotal);
    //     }, 24 * 60 * 60 * 1000); // 24 hours in milliseconds

    //     console.log('User Id', this.userData.username);
    //     console.log('You have Successfully Activated Package');
    //     this.buttonClicked = true;
    //     this.getCurrentTime();
    //   } else {
    //     console.log('You have not successfully activated the package');
    //   }
  }

  // getcolor(index:number){
  //  return index===1 ? 'black':'transparent'
  // }
  async getUserData() {
    const user: any = await check("user");
    const userData = JSON.parse(user);
    this.userData = userData;
    console.log(this.userData);
    // this.apiCall.getUserDepositAmount(this.userData?.id).subscribe((res) => {
    //   this.userDeposits = res[0];
    //   console.log(this.userDeposits);
    // });
  }

  async checkBalacne() {
    const user: any = await check("user");
    const userData = JSON.parse(user);
    console.log(userData);
    this.apiCall.userdata(userData.username).subscribe((user) => {
      console.log(user);
      // this.userBlanace = +user.balnce;
      // console.log(typeof this.userBlanace, this.userBlanace);
      // if ($event.target.value > this.userBlanace) {
      //   this.showBalanceMessage = `You have only Rs. ${this.userBlanace} balance`;
      //   console.log('you have not balacne');
      // } else {
      //   this.showBalanceMessage = '';
      // }
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

  // public async ActivePackage(price: number, level1Amount: any, level2Amount: any, level3Amount: any, level4Amount: any, level5Amount: any, level6Amount: any) {
  //   const user: any = await check('user');
  //   const userData = JSON.parse(user);
  //   console.log(userData);
  //   console.log(price, level1Amount, level2Amount, level3Amount, level4Amount, level5Amount, level6Amount)
  // this.PackageDetails.price = price;
  // this.PackageDetails.level1 = level1Amount;
  // this.PackageDetails.level2 = level2Amount;
  // this.PackageDetails.level3 = level3Amount;
  // this.PackageDetails.level4 = level4Amount;
  // this.PackageDetails.level5 = level5Amount;
  // this.PackageDetails.level6 = level6Amount;   assif
  // this.PackageDetails.user_id = userData.id;
  // this.PackageDetails.username = userData.username;
  // console.log(this.PackageDetails)
  // this.apiCall.userdata(userData.username).subscribe((user) => {
  //   console.log(user);
  //  const userBlanace = +user.balnce;
  //   console.log(typeof userBlanace, userBlanace);
  //   if(userBlanace >= price) {
  //     console.log('you an buy package')
  //     this.apiCall.ActivePackage(userData.id).subscribe((res) => {
  //       console.log(res)
  //       this.Users = res;
  //       console.log(this.packageDetails)
  //       this.apiCall.updateLevel(this.packageDetails).subscribe((levelRes) => {
  //         console.log(levelRes)
  //         if(levelRes.error == false) {
  //           this.toast.SuccessToast('Package Activated Successfully', 'Good Job!')
  //         }
  //       });
  //     });
  //   }
  //   else{
  //     console.log('you connot buy package because you do not have anough balacne');
  //     this.toast.ErrorToast('You do not have enough Balacne please deposite some amount', 'Sorry')
  //   }
  // });
  // }
}
