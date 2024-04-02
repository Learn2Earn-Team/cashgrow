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
      icon: "icon bi-share-fill ",
      type: "Direct Bonus",
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

    { icon: "icon bi bi-trophy", type: "Rewards", subtype: "", today: "" },
    {
      icon: "icon bi bi-person-lines-fill",
      type: "Direct",
      subtype: "",
      today: "",
    },
    { icon: "icon bi bi-diagram-3-fill", type: "Team", subtype: "", today: "" },
    {
      icon: "icon bi-person-lines-fill",
      type: "Passive Income",
      subtype: "",
      today: "",
    },
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
  status: any;

  constructor(
    private route: Router,
    private toast: ToastService,
    private apicall: ApicallService
  ) {
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
        this.apicall.getrefstatus(userData.username).subscribe((res2: any) => {
          this.apicall.userdata(userData.username).subscribe((res: any) => {
            if (+res.balnce > +res2) {
              this.status = [1, 2];
            } else {
              this.status = [];
            }
          });
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
    }, 10000);
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
        this.card[0].subtype = res.directBalance.toFixed(2);
        this.card[1].subtype = res.netBalance;
        this.card[2].subtype = res.earning;
        this.card[2].today = res.todayearning;
        this.directBonous.subtype = res.username;
        this.directBonous.today = res.todaydirectBalance;
        this.card[3].subtype = res.Rewards;
        this.card[3].today = res.todayRewards;
        this.card[4].subtype = res.totalDirectJoing;
        this.card[4].today = res.todayDirectJoing;
        this.card[5].subtype = res.totalIndirectJoining;
        this.card[5].today = res.IndirectJoining;
        if (res.totaldeposit > 0) {
          this.card[6].subtype = Math.max(0, res.totaldeposit - res.netBalance);
          this.card[6].today = Math.max(0, res.totaldeposit - res.netBalance);
        } else {
          this.card[6].subtype = 0;
          this.card[6].today = 0;
        }
        if (res.mypackage === 0) {
          this.card[7].subtype = "BASIC";
          this.card[7].today = res.invest;
        } else if (res.mypackage === 1) {
          this.card[7].subtype = "PRIME";
          this.card[7].today = res.invest;
        } else if (res.mypackage === 2) {
          this.card[7].subtype = "PRIME PLUS";
          this.card[7].today = res.invest;
        } else if (res.mypackage === 3) {
          this.card[7].subtype = "PREMIUM";
          this.card[7].today = res.invest;
        } else if (res.mypackage === 4) {
          this.card[7].subtype = "PREMIUMN PLUS";
          this.card[7].today = res.invest;
        } else {
          this.card[7].subtype = "BASIC";
          this.card[7].today = res.invest;
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
