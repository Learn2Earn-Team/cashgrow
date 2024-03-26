import { Component } from "@angular/core";
import { ApicallService } from "../services/apicall.service";
import { check } from "../localStorage/LocalStorage";
@Component({
  selector: "app-downloadapp",
  templateUrl: "./downloadapp.component.html",
  styleUrls: ["./downloadapp.component.scss"],
})
export class DownloadappComponent {
  data: any;
  name: any;
  pageSize = 15;
  p = 1;
  ngOnInit(): void {
    this.mydailyprofit();
  }
  constructor(public apiCall: ApicallService) {}
  async mydailyprofit() {
    const user: any = await check("user");
    const userData = JSON.parse(user);
    this.apiCall.mydailyprofit(userData.username).subscribe((res: any) => {
      this.data = res;
      console.log(this.data);
    });
  }
}
