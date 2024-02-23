import { Component } from '@angular/core';
import { ApicallService } from 'src/app/services/apicall.service';

@Component({
  selector: 'app-bydatereporttotal',
  templateUrl: './bydatereporttotal.component.html',
  styleUrls: ['./bydatereporttotal.component.scss'],
})
export class BydatereporttotalComponent {
  public userDeposits: any = {};
  public dates = {
    start: '',
    end: '',
  };

  constructor(private apiCall: ApicallService) {}

  ngOnInit() {
    this.getUserData();
  }

  async getUserData() {
    this.apiCall.weeklyReport().subscribe((res) => {
      this.userDeposits = res;
      console.log(this.userDeposits);
    });
  }
  extractDate(dateTimeString: string): string {
    const date = new Date(dateTimeString);
    const formattedDate = date.toISOString().split('T')[0];
    return formattedDate;
  }
  public RecordOfDate(): void {
    this.dates.start = this.extractDate(this.dates.start);
    this.dates.end = this.extractDate(this.dates.end);
    this.apiCall.ReportByDate(this.dates).subscribe((res) => {
      this.userDeposits = res;
      console.log(this.userDeposits);
    });
  }
}
