import { Component } from '@angular/core';
import { check } from 'src/app/localStorage/LocalStorage';
import { ApicallService } from 'src/app/services/apicall.service';

@Component({
  selector: 'app-getreward',
  templateUrl: './getreward.component.html',
  styleUrls: ['./getreward.component.scss']
})
export class GetrewardComponent {
  public userdata: any = [];
  userrewarde: any;
  constructor(private apiCall: ApicallService) {
    this.NewUserdata();
  }
  ngOnInit(): void {
this.aprovereward();
  }
  public NewUserdata(): void {
    this.apiCall.rewadrequests().subscribe((res) => {
      this.userdata = res;
    });
  }
  depositeStatusupdate($event: any, item: any) {
    const status = {
      status: $event.target.value,
      id: item.wid,
      user_id: item.user_id,
      amount: item.amount,
    };
    this.apiCall.rewardstatus(status).subscribe((res) => {
      this.NewUserdata();
      this.aprovereward();
    });
  }
  async aprovereward(){
    this.apiCall.approveReward().subscribe(res=>{
this.userrewarde=res;
console.log(this.userrewarde);
    })
  }
}
