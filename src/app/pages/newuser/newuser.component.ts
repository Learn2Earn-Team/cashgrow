import { Component } from "@angular/core";
import { ApicallService } from "src/app/services/apicall.service";
import { ToastService } from "src/app/services/toast.service";

@Component({
  selector: "app-newuser",
  templateUrl: "./newuser.component.html",
  styleUrls: ["./newuser.component.scss"],
})
export class NewuserComponent {
  public userdata: any = {};
  pageSize = 20;
  p = 1;
  constructor(private apiCall: ApicallService, private toast: ToastService) {
    this.NewUserdata();
  }
  public NewUserdata(): void {
    this.apiCall.getNewUser().subscribe((res) => {
      this.userdata = res;
      console.log(this.NewUserdata);
    });
  }
  PinUser($event: any, item: any) {
    const status = {
      status: $event.target.value,
      user_id: item.id,
    };
    this.apiCall.PinUser(status).subscribe((res) => {
      if (res.error) {
        this.toast.ErrorToast("Somethin Went Wrong", "Error");
      } else {
        this.NewUserdata();
        this.toast.SuccessToast("User is updated", "Updated");
      }
      this.NewUserdata();
    });
  }
  UpdateUserStatus($event: any, item: any) {
    const status = {
      status: $event.target.value,
      user_id: item.id,
    };
    this.apiCall.UpdateUserStatus(status).subscribe((res) => {
      if (res.error) {
        this.toast.ErrorToast("Somethin Went Wrong", "Error");
      } else {
        this.NewUserdata();
        this.toast.SuccessToast("User is updated", "Updated");
      }
    });
  }
}
