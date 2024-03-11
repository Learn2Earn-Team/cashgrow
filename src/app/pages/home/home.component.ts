import { Component } from "@angular/core";
import { NgbOffcanvas } from "@ng-bootstrap/ng-bootstrap";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import Aos from "aos";
import { ApicallService } from "src/app/services/apicall.service";
import { check } from "src/app/localStorage/LocalStorage";
import { ToastService } from "src/app/services/toast.service";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent {
  closeResult = "";
  alldata: any;
  modalService: any;
  userdataarray: any;
  balance: any;
  res: any;
  constructor(
    public toast: ToastService,
    public apiCall: ApicallService,
    private router: Router,
    private offcanvasService: NgbOffcanvas,
    private http: HttpClient
  ) {}

  ngOnInit() {
    Aos.init();
    this.getdata(); // Initialize AOS when the component is initialized
  }
  async getdata() {
    // const user: any = await check('user');
    // const userData = JSON.parse(user);
    this.apiCall.getPackages("google").subscribe((res: any) => {
      this.alldata = res;
      console.log(this.alldata);
    });
  }

  goToRegiester() {
    this.router.navigate(["registrationform"], {
      // state: { data: userData},
      queryParams: { id: "google" },
    });
  }
  open(content: any) {
    this.offcanvasService
      .open(content, { ariaLabelledBy: "offcanvas-basic-title" })
      .result.then(
        (result) => {
          // this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  // ../../../assets/APK/Cashgrow.apk

  downloadApkFromAssets(apkName: string) {
    // Construct the path to the APK file in the assets folder
    const apkPath = `assets/${apkName}`;

    // Read the APK file from the assets
    fetch(apkPath)
      .then((response) => response.blob())
      .then((blob) => {
        // Create a link element
        const link = document.createElement("a");

        // Set the download attribute, file name, and type
        link.download = apkName;
        link.href = window.URL.createObjectURL(blob);
        link.type = "application/vnd.android.package-archive";

        // Append the link to the body
        document.body.appendChild(link);

        // Trigger the click event to start the download
        link.click();

        // Remove the link from the DOM
        document.body.removeChild(link);
      })
      .catch((error) => {
        console.error("Error downloading APK:", error);
      });
  }
}
