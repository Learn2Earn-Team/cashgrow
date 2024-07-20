import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { check, set } from "src/app/localStorage/LocalStorage";
import { ApicallService } from "src/app/services/apicall.service";
import { AuthService } from "src/app/services/auth.service";
import { ToastService } from "src/app/services/toast.service";

@Component({
  selector: "app-registrationform",
  templateUrl: "./registrationform.component.html",
  styleUrls: ["./registrationform.component.scss"],
})
export class RegistrationformComponent {
  public userobj: any = {};
  public user: any;
  public authemail: boolean = false;
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
  private intervalId: any;

  constructor(
    private apiCall: ApicallService,
    private route: Router,
    private authservice: AuthService,
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
  async sendvarifyEmail() {
    const value = await this.authservice.register(
      this.signupdata.email,
      "776656"
    );
    if (value) {
      console.log("sends");
      this.IsEmailVarify();
    } else {
    }
  }
  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
  async IsEmailVarify() {
    console.log("isVarify");
    this.intervalId = setInterval(async () => {
      const value = await this.authservice.checkEmailVerification();
      console.log("varify Status", value);
      if (value) {
        this.authemail = true;
        clearInterval(this.intervalId);
      }
    }, 3000);
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
