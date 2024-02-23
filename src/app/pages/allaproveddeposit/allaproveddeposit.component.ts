import { Component } from '@angular/core';
import { check } from 'src/app/localStorage/LocalStorage';
import { ApicallService } from 'src/app/services/apicall.service';

@Component({
  selector: 'app-allaproveddeposit',
  templateUrl: './allaproveddeposit.component.html',
  styleUrls: ['./allaproveddeposit.component.scss'],
})
export class AllaproveddepositComponent {
  public userdata: any = [];
  pageSize = 20;
  p = 1;
  constructor(private apiCall: ApicallService) {
    this.NewUserdata();
  }
  public async NewUserdata() {
    this.apiCall.ApprovedDeposit().subscribe((res) => {
      this.userdata = res;
      console.log(this.NewUserdata);
    });
  }
}
