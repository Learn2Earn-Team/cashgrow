import { Component } from '@angular/core';
import { ApicallService } from "../services/apicall.service";
import { ToastService } from "../services/toast.service";


@Component({
  selector: 'app-package-history',
  templateUrl: './package-history.component.html',
  styleUrls: ['./package-history.component.scss']
})
export class PackageHistoryComponent {
  data: any;

  constructor(public apicall: ApicallService, private toast: ToastService) {
    this.table();
  }
  table() {
    this.apicall.AllPackages().subscribe((res) => {
      this.data = res;
      console.log(this.data);
    });
  }

}
