import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { check, set } from "src/app/localStorage/LocalStorage";
import { ApicallService } from "src/app/services/apicall.service";
import { ToastService } from "src/app/services/toast.service";

@Component({
  selector: "app-registrationform",
  templateUrl: "./registrationform.component.html",
  styleUrls: ["./registrationform.component.scss"],
})
export class RegistrationformComponent {
  public userobj: any = {};
  public user: any;
  public signupdata: any = {
    firstname: "",
    lastname: "",
    contactno: "",
    email: "",
    password: "",
    invitationlink: "",
  };
  public newpassword: any;
  public showmessage: any;
  public isChecked: any = false;
  public userFirstName: any;
  constructor(
    private apiCall: ApicallService,
    private route: Router,
    private activateRoute: ActivatedRoute,
    private toast: ToastService
  ) {
    // this.GetUserData();
    this.activateRoute.queryParams.subscribe((params: any) => {
      console.log(params);
      if (Object.keys(params).length === 0 || params.id == "") {
        console.log("No invitation link");
        this.toast.ErrorToast("Invalid Invitation Link", "Sorry!");
        this.route.navigate(["home"]);
      } else {
        this.signupdata.invitationlink = params.id;
      }
    });
  }
  public async GetUserData() {
    this.user = await check("user");
    this.userobj = JSON.parse(this.user);
    console.log(this.userobj);
  }

  password($event: any) {
    console.log($event.target.value);
    this.newpassword = $event.target.value;
  }
  confirmpassword($event: any) {
    console.log($event.target.value);
    if ($event.target.value == this.newpassword) {
      console.log("password correct");
      this.showmessage = "Correct Password";
      this.signupdata.password = $event.target.value;
    } else {
      console.log("password not match");
      this.showmessage = "Password Not Matched!";
    }
  }

  public submit() {
    this.signupdata.firstname =
      this.userFirstName + " " + this.signupdata.lastname;
    console.log(this.signupdata);
    this.apiCall.signup(this.signupdata).subscribe((res) => {
      console.log(res);
      if (res.error === false) {
        set("user", res?.data);
        this.signupdata = {
          firstname: "",
          lastname: "",
          contactno: "",
          email: "",
          password: "",
        };
        this.userFirstName = "";
        this.route.navigate(["/default/index"]);
      } else {
        alert("InValid Credential");
        // set('user', res?.data);
        // this.route.navigate(['/default/index']);
      }
    });
  }
}
