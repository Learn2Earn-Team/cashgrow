import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { check } from 'src/app/localStorage/LocalStorage';

@Component({
  selector: 'app-chaticon',
  templateUrl: './chaticon.component.html',
  styleUrls: ['./chaticon.component.scss']
})
export class ChaticonComponent {

  constructor(private route : Router) {}

  async goToComplain() {
    const user: any = await check('user');
    const userData = JSON.parse(user);
    console.log(userData);
    if(userData.username == 'google'){
      this.route.navigate(['/default/complainbox'])
    }
    else{
      this.route.navigate(['/complain'])
    }
  }
}
