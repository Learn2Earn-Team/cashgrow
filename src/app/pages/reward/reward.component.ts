import { Component } from "@angular/core";
import { check } from "src/app/localStorage/LocalStorage";
import { ApicallService } from "src/app/services/apicall.service";
import { ToastService } from "src/app/services/toast.service";
@Component({
  selector: "app-reward",
  templateUrl: "./reward.component.html",
  styleUrls: ["./reward.component.scss"],
})
export class RewardComponent {
  userTeem: any;
  reward: any;
  // total: any;
  indirect_total: number = 0;
  direct_total: number = 0;
  indirectdata: any;
  directdata: any;
  amountreward: any;
  rewardreq: any;
  constructor(public apiCall: ApicallService, public toast: ToastService) {}
  ngOnInit(): void {
    this.userteam();
    this.userrewad();
  }
  public hundred: any = [
    { RewardName: "Bronze", direct: 400, indirect: 600, reward: 50 },
    { RewardName: "Silver", direct: 1000, indirect: 1500, reward: 100 },
    { RewardName: "Gold", direct: 2000, indirect: 3000, reward: 300 },
    { RewardName: "Platinum", direct: 4000, indirect: 6000, reward: 500 },
    { RewardName: "Daimond", direct: 10000, indirect: 15000, reward: 1200 },
  ];
  data: any;
  async userteam() {
    const user: any = await check("user");
    const userData = JSON.parse(user);
    console.log(userData);
    this.apiCall.userteam(userData.username).subscribe((res) => {
      this.userTeem = res;
      console.log("user", this.userTeem);

      const total = res?.direct?.reduce(
        (prevValue: any, currentValue: any) =>
          prevValue + currentValue.totalref,
        0
      );
      const tota2 = res?.direct?.reduce(
        (prevValue: any, currentValue: any) => prevValue + currentValue.total,
        0
      );
      const tota3 = res?.direct?.reduce(
        (prevValue: any, currentValue: any) =>
          prevValue + currentValue.totalpassive,
        0
      );
      const tota32 = res?.direct?.reduce(
        (prevValue: any, currentValue: any) =>
          prevValue + currentValue.totalrefpasive,
        0
      );
      this.directdata = total + tota2 + tota3 + tota32;
      const total2 = res?.indirect?.reduce(
        (prevValue: any, currentValue: any) =>
          prevValue + currentValue.totalref,
        0
      );
      const tota23 = res?.indirect?.reduce(
        (prevValue: any, currentValue: any) => prevValue + currentValue.total,
        0
      );
      const tota223 = res?.indirect?.reduce(
        (prevValue: any, currentValue: any) =>
          prevValue + currentValue.totalrefpasive,
        0
      );
      const tota2w23 = res?.indirect?.reduce(
        (prevValue: any, currentValue: any) =>
          prevValue + currentValue.totalpassive,
        0
      );
      this.indirectdata = total2 + tota23 + tota223 + tota2w23;
    });
  }

  outputAry: {
    direct_total: number;
    indirect_total: number;
    direct_userId: number;
    indirect_userId: number;
  }[] = [];

  async bbb(item: any) {
    console.log(item);
    if (this.directdata >= 400 && this.indirectdata >= 600) {
      this.amountreward = 50;
      console.log("amount 50");
      this.post();
    } else if (this.directdata >= 1000 && this.indirectdata >= 1500) {
      this.amountreward = 100;
      console.log("amount 100");
      this.post();
    } else if (this.directdata >= 2000 && this.indirectdata >= 3000) {
      console.log("amount 300");
      this.amountreward = 300;
      this.post();
    } else if (this.directdata >= 4000 && this.indirectdata >= 6000) {
      console.log("amount 500");
      this.amountreward = 500;
      this.post();
    } else if (this.directdata >= 10000 && this.indirectdata >= 25000) {
      console.log("amount 1200");
      this.amountreward = 1200;
      this.post();
    } else {
      this.toast.ErrorToast("Not Eligible for apply ", "Error");
    }
  }
  async post() {
    const user: any = await check("user");
    const userData = JSON.parse(user);
    console.log(userData);

    const data = {
      user_id: userData.id,
      amount: this.amountreward,
    };
    console.log(data);
    this.apiCall.reward(data).subscribe((res) => {
      this.reward = res;
      console.log(this.reward);
      this.toast.SuccessToast("Apply Succsessfully", "Good Job!");
    });
  }
  async userrewad() {
    const user: any = await check("user");
    const userData = JSON.parse(user);
    console.log(userData);
    this.apiCall.userrewad(userData.id).subscribe((res) => {
      this.rewardreq = res;
      console.log(this.rewardreq);
    });
  }
}
