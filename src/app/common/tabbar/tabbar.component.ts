import { AfterViewInit, Component, OnInit } from '@angular/core';
import { check } from 'src/app/localStorage/LocalStorage';
import { ApicallService } from 'src/app/services/apicall.service';

@Component({
  selector: 'app-tabbar',
  templateUrl: './tabbar.component.html',
  styleUrls: ['./tabbar.component.scss']
})
export class TabbarComponent implements OnInit, AfterViewInit{
  public userobj :any = {};
  public user :any;


  constructor(
   private apiCall : ApicallService,) {
    // console.log(this.router.url)
    this.GetUserData();
  }
  ngAfterViewInit() {
    this.GetUserData();
  }
  ngOnInit() {
    this.GetUserData();
  }
  public async GetUserData() {
    this.user = await check("user");
    const userData = JSON.parse(this.user)
    this.apiCall.GetuserProfileData(userData.id).subscribe(profile => {
      console.log(profile)
      this.userobj = profile[0];
    })
  }




}
