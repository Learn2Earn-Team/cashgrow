import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpErrorResponse } from "@angular/common/http";
import { Location } from '@angular/common';
import { check } from 'src/app/localStorage/LocalStorage';
import { ApicallService } from 'src/app/services/apicall.service';
import { ToastService } from 'src/app/services/toast.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() public path: string = ''
  Location: any;
  public userobj :any = {};
  public user :any;
  public name :any = '';
  constructor(
    public router: Router,
    private formBuilder: FormBuilder,private apiCall : ApicallService,) {
    console.log(this.router.url)
  }


  ngOnInit() {
    this.GetUserData();
  }
  public async GetUserData() {
    this.user = await check("user");
    const userData = JSON.parse(this.user)
    this.apiCall.GetuserProfileData(userData.id).subscribe(profile => {
   
      this.userobj = profile[0];
    console.log(this.userobj.name)
    })
  }
  downloadApkFromAssets(apkName: string) {
    // Construct the path to the APK file in the assets folder
    const apkPath = `assets/${apkName}`;

    // Read the APK file from the assets
    fetch(apkPath)
      .then((response) => response.blob())
      .then((blob) => {
        // Create a link element
        const link = document.createElement('a');

        // Set the download attribute, file name, and type
        link.download = apkName;
        link.href = window.URL.createObjectURL(blob);
        link.type = 'application/vnd.android.package-archive';

        // Append the link to the body
        document.body.appendChild(link);

        // Trigger the click event to start the download
        link.click();

        // Remove the link from the DOM
        document.body.removeChild(link);
      })
      .catch((error) => {
        console.error('Error downloading APK:', error);
      });
  }
}

