import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { check } from 'src/app/localStorage/LocalStorage';
import { ApicallService } from 'src/app/services/apicall.service';

@Component({
  selector: 'app-internaltransfer',
  templateUrl: './internaltransfer.component.html',
  styleUrls: ['./internaltransfer.component.scss'],
})
export class InternaltransferComponent {
  public userid: any = '';
  public uesrData: any = {};
  public userTransferData: any = {};
  public userobj: any = {};

  public user: any;
  tranferAmount: any;
  constructor(
    private apiCall: ApicallService,
    private route: Router,
    private modalService: NgbModal
  ) {
    this.NewUserdata();
  }

  public userdata() {
    this.apiCall.userdata(this.userid).subscribe((res) => {
      this.uesrData = res;

      this.route.navigate(['/transfer'], { state: { data: this.uesrData } });
    });
  }

  public async NewUserdata() {
    this.user = await check('user');
    this.userobj = JSON.parse(this.user);
    this.apiCall.cashwalltet(this.userobj.username).subscribe((res) => {
      this.userTransferData = res;
    });
  }

  open(content: any, amount:any) {
    this.tranferAmount = amount
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          // this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
