import { Component } from '@angular/core';
import { check } from 'src/app/localStorage/LocalStorage';
import { ApicallService } from 'src/app/services/apicall.service';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-withdrawhistory',
  templateUrl: './withdrawhistory.component.html',
  styleUrls: ['./withdrawhistory.component.scss']
})
export class WithdrawhistoryComponent {
  public userdata:any = {};
  public userobj :any = {};
  
  public user :any;
  public userDepositeAmouint : any = 0;
constructor( private apiCall : ApicallService,private modalService: NgbModal){
    this.NewUserdata();
}
open(content: any, item:any) {
  console.log(item)
  this.userDepositeAmouint = item.amount;
  this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
    (result: any) => {
      // this.closeResult = `Closed with: ${result}`;
    },
    (reason: any) => {
      // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    },
  );
}
public async NewUserdata() {
  this.user = await  check("user");
  this.userobj = JSON.parse(this.user)
  this.apiCall.allwithdraw().subscribe(res => {
   this.userdata = res;

  })
}
}
