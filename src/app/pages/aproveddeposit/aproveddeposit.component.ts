import { Component } from '@angular/core';
import { ApicallService } from 'src/app/services/apicall.service';

@Component({
  selector: 'app-aproveddeposit',
  templateUrl: './aproveddeposit.component.html',
  styleUrls: ['./aproveddeposit.component.scss'],
})
export class AproveddepositComponent {
  public userdata: any = [];
  constructor(private apiCall: ApicallService) {
    this.NewUserdata();
  }
  public NewUserdata(): void {
    this.apiCall.PendingDeposit().subscribe((res) => {
      this.userdata = res;
    });
  }
  depositeStatusupdate($event: any, item: any) {
    const status = {
      status: $event.target.value,
      id: item.id,
      user_id: item.user_id,
      amount: item.amount,
    };
    this.apiCall.depositeStatusupdate(status).subscribe((res) => {
      this.NewUserdata();
    });
  }
}
