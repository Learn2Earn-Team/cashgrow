import { Component } from "@angular/core";
import { check } from "src/app/localStorage/LocalStorage";
import { ApicallService } from "src/app/services/apicall.service";

@Component({
  selector: "app-team",
  templateUrl: "./team.component.html",
  styleUrls: ["./team.component.scss"],
})
export class TeamComponent {
  public userdata: any = [];
  public userobj: any = {};
  public user: any;
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
  constructor(private apiCall: ApicallService) {
    this.NewUserdata();
  }
  ngOnInit(): void {
    this.getrefstatus();
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
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
}
