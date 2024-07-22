import { Component } from "@angular/core";
import { check } from "src/app/localStorage/LocalStorage";
import { ApicallService } from "src/app/services/apicall.service";
import { ToastService } from "src/app/services/toast.service";

@Component({
  selector: "app-alluser",
  templateUrl: "./alluser.component.html",
  styleUrls: ["./alluser.component.scss"],
})
export class AlluserComponent {
  public Usercards: any = [
    {
      Orderno: "02",
      Name: "Amna",
      UserId: "090",
      PIN: " 234",
      Sponsar: "982934hgvjhhgkgc72",
      Email: "Ali@gmail.com",
      Contact: "ndbjhe",
      Whatsapp: "0925jhgkjghghcsh37912",
      Joining: "yes",
    },
    {
      Orderno: "02",
      Name: "Amna",
      UserId: "090",
      PIN: " 234",
      Sponsar: "982934hgvjhhgkgc72",
      Email: "Ali@gmail.com",
      Contact: "ndbjhe",
      Whatsapp: "0925jhgkjghghcsh37912",
      Joining: "yes",
    },
    {
      Orderno: "02",
      Name: "Amna",
      UserId: "090",
      PIN: " 234",
      Sponsar: "982934hgvjhhgkgc72",
      Email: "Ali@gmail.com",
      Contact: "ndbjhe",
      Whatsapp: "0925jhgkjghghcsh37912",
      Joining: "yes",
    },
  ];
  public userdata: any = {};
  pageSize = 20;
  p = 1;
  user: any;
  constructor(private apiCall: ApicallService, private toast: ToastService) {
    this.NewUserdata();
  }

  async NewUserdata() {
    const user: any = await check("user");
    this.user = JSON.parse(user);
    this.apiCall.getAllUser().subscribe(async (res) => {
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
