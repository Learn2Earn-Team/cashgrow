import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.scss']
})
export class UserdashboardComponent {

  public userUniqeId :any = '';
  constructor(private router : Router) {

  }

  goTODasshBoardDetail() {
    console.log(this.userUniqeId);
    this.router.navigate(['default/userdashboarddetails'], {state : {data : this.userUniqeId}})
  }

}
