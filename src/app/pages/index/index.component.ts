import { Component, OnInit } from "@angular/core";

import { Router } from "@angular/router";
import { check } from "src/app/localStorage/LocalStorage";
import { ToastService } from "src/app/services/toast.service";
import { ApicallService } from "src/app/services/apicall.service";
import { Clipboard } from "@capacitor/clipboard";
import Swiper from "swiper";

const swiper = new Swiper(".swiper", {
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  loop: true,
});

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.scss"],
})
export class IndexComponent implements OnInit {
  public card: any = [
    {
      icon: "icon bi bi-wallet2",
      type: "Cash Balances",
      subtype: "",
      rs: "Rs",
      today: "",
    },
    {
      icon: "icon bi bi-cash-stack",
      type: "Profits",
      subtype: "",
      rs: "Rs",
      today: "",
    },
    { icon: "icon bi bi-diagram-3-fill", type: "Team", subtype: "", today: "" },
    {
      icon: "icon bi bi-diagram-3-fill",
      type: "Team Commissions",
      subtype: "",
      today: "",
    },
    {
      icon: "icon bi-person-lines-fill",
      type: "Passive Income",
      subtype: "",
      today: "",
    },

    { icon: "icon bi bi-trophy", type: "Rewards", subtype: "", today: "" },

    {
      icon: "icon bi-person-lines-fill",
      type: "My Package",
      subtype: "",
      today: "",
    },
  ];

  public directBonous: any = {
    icon: " icon bi bi-person-heart",
    type: "My ID",
    subtype: "",
    today: "",
  };
  public interval: any;
  public dashbaordData = {
    username: "",
    activePromotion: "",
    status: "",
    totalEarning: "",
    totalCoins: "",
    Rewards: "",
    directBalance: "",
    SocialMedia: "",
    watchBalance: "",
    subscribeBalance: "",
  };
  userData: any;
  userobj: any;
  userTeem: any;
  pendingorders: any;
  userdataarray: any;
  pasiveincom: any;
  ddd: any;
  status: any = [];

  constructor(
    private route: Router,
    private toast: ToastService,
    private apicall: ApicallService
  ) {
    this.activatePackage();
    this.getUserData();
    this.getUserDashoardData();
    console.log(this.card);
  }
  ngOnInit() {
    this.getrefstatus();
    const swiper = new Swiper(".swiper-container", {
      autoplay: {
        delay: 1000,
      },
    });
  }
  async copyUserId() {
    const user: any = await check("user");
    const userData = JSON.parse(user);

    const url = `https://thecashgrow.com/#/registrationform?id=${userData.username}`;
    await Clipboard.write({
      string: url,
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
  async getrefstatus() {
    const user: any = await check("user");
    const userData = JSON.parse(user);
    this.apicall.myorders(userData.username).subscribe((res3) => {
      if (res3.length > 0) {
        this.apicall.getrefstatus(res3).subscribe((res2: any) => {
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
  async reward() {
    const user: any = await check("user");
    const userData = JSON.parse(user);
    console.log(userData);
    this.apicall.reward(userData.user_id).subscribe((res) => {
      console.log(res);
    });
  }
  ngAfterViewInit(): void {
    this.interval = setInterval(async () => {
      console.log(this.interval);

      // this.getnotifications();
      const user: any = await check("user");
      const userData = JSON.parse(user);
      console.log(userData);
      this.notification();
      this.activatePackage();
    }, 5000);
  }
  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
  notification() {
    console.log("The  data is repeating after three sec");
  }

  async activatePackage() {
    const user: any = await check("user");
    const userData = JSON.parse(user);
    console.log(userData);
    this.apicall.Pendingorder(userData.username).subscribe((res: any) => {
      if (res.length > 0) {
        this.apicall.activatePackafe(userData.id).subscribe((res2: any) => {
          const data = {
            username: userData.username,
            users: res2,
            PackageDetails: res,
          };
          console.log("repeat data", data);
          this.apicall.adduserprofit(data).subscribe((res) => {
            console.log(res);
          });
        });
      }
    });
  }
  async getUserDashoardData() {
    const user: any = await check("user");
    const userData = JSON.parse(user);
    console.log(userData);
    console.log(userData.id);
    this.apicall.api_getmyteam(userData.username).subscribe((team) => {
      console.log("gettt", team);
      this.apicall.getdashboardData(userData.id, team).subscribe((res) => {
        console.log("dfadsda", res);
        this.card[0].subtype = +res.netBalance;
        this.card[0].today = +res.netBalance + "$";
        this.card[1].subtype = res.totalprofit;
        this.card[1].today = res.todayprofit != null ? res.todayprofit : 0;
        this.directBonous.subtype = res.username;
        this.directBonous.today = null;
        this.card[2].subtype = team.length;
        this.card[2].today = res.IndirectJoining;
        this.card[3].subtype =
          res.directBalance != null ? res.directBalance : 0;
        this.card[3].today = res.todaydirectBalance;
        this.card[5].subtype = res.reward;
        this.card[5].today = res.todayRewards;
        if (res.totaldeposit > 0) {
          this.card[4].subtype = res.totalpassive;
          this.card[4].today = res.todaypassive;
        } else {
          this.card[4].subtype = 0;
          this.card[4].today = 0;
        }
        if (res.mypackage === 0) {
          this.card[6].subtype = "BASIC";
          this.card[6].today = res.mypackageamount;
        } else if (res.mypackage === 1) {
          this.card[6].subtype = "PRIME";
          this.card[6].today = res.mypackageamount;
        } else if (res.mypackage === 2) {
          this.card[6].subtype = "PRIME PLUS";
          this.card[6].today = res.mypackageamount;
        } else if (res.mypackage === 3) {
          this.card[6].subtype = "PREMIUM";
          this.card[6].today = res.mypackageamount;
        } else if (res.mypackage === 4) {
          this.card[6].subtype = "PREMIUMN PLUS";
          this.card[6].today = res.mypackageamount;
        }
      });
    });
  }
  async userteam() {
    const user: any = await check("user");
    const userData = JSON.parse(user);
    console.log(userData);
    this.apicall.userteam(userData.username).subscribe((res) => {
      this.userTeem = res;
      console.log(this.userTeem);
    });
  }
  async userdata1() {
    const userz: any = await check("user");
    const userData = JSON.parse(userz);
    console.log(userData);
    this.apicall.userdata(userData.username).subscribe((res: any) => {
      this.userdataarray = res;
      console.log(this.userdataarray);
    });
  }

  async getUserData() {
    const user: any = await check("user");
    const userData = JSON.parse(user);
    console.log(userData);
    this.userData = userData;
    this.apicall.GetuserProfileData(userData.id).subscribe((profile) => {
      console.log(profile);
      this.userobj = profile[0];
    });
  }
  goToAgency(path: any) {
    console.log(path);
    this.route.navigate([path]);
  }

  goToTiktokAgency() {
    this.route.navigate(["/default/tiktokeagency"]);
  }
  goToYouTubeAgency() {
    this.route.navigate(["/default/youtubeagency"]);
  }
  goToFaceBookAgency() {
    this.route.navigate(["/default/facebookagency"]);
  }
  goToInstagram() {
    this.route.navigate(["/default/instagramagency"]);
  }
  //      <h6 class="text-muted">{{ item.today }}</h6>

  async goToComplain() {
    const user: any = await check("user");
    const userData = JSON.parse(user);
    console.log(userData);
    if (userData.username == "google") {
      this.route.navigate(["/default/complainbox"]);
    } else {
      this.route.navigate(["/complain"]);
    }
  }
}
