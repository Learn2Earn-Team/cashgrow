import { Component } from "@angular/core";
import { ApicallService } from "../services/apicall.service";
import { ToastService } from "../services/toast.service";

@Component({
  selector: "app-edit-user",
  templateUrl: "./edit-user.component.html",
  styleUrls: ["./edit-user.component.scss"],
})
export class EditUserComponent {
  data: any;
  pageSize = 10;
  p = 1;
  constructor(public apicall: ApicallService, private toast: ToastService) {
    this.table();
  }
  table() {
    this.apicall.Allusers().subscribe((res) => {
      this.data = res;
      console.log(this.data);
    });
  }
  delete(item: any) {
    this.apicall.deleteuser(item).subscribe((res) => {
      this.data = res;
      if (res.error) {
        this.toast.ErrorToast("User Not Deleted", "Error");
      } else {
        this.table();
        this.toast.SuccessToast("User Deleted", "");
      }
    });
  }
}
