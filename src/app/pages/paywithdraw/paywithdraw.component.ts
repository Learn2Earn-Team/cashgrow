import { Component, OnInit } from '@angular/core';
import { ApicallService } from 'src/app/services/apicall.service';
import { ToastService } from 'src/app/services/toast.service';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { check } from 'src/app/localStorage/LocalStorage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paywithdraw',
  templateUrl: './paywithdraw.component.html',
  styleUrls: ['./paywithdraw.component.scss']
})
export class PaywithdrawComponent implements OnInit{
  public Paycards:any=[
    {
       No:'02',
       Name:'Amna',
       AmountRs:'090',
       Update:'Ali@gmail.com',
       Details:' 234',  
    },
    {
    No:'02',
    Name:'Amna',
    AmountRs:'090',
    Update:'Ali@gmail.com',
    Details:' 234',  
    },
    {
  No:'02',
  Name:'Amna',
  AmountRs:'090',
  Update:'Ali@gmail.com',
  Details:' 234',  
   },
   {
  No:'02',
  Name:'Amna',
  AmountRs:'090',
  Update:'Ali@gmail.com',
  Details:' 234',  
    }
  ];
  allWithdrawRequest: any;
  pageSize = 20;
  p = 1;
  constructor(private apicall : ApicallService, private toast : ToastService,private modalService: NgbModal, public route : Router) {}

  ngOnInit() {
    this.getAllRequests();
  }

  getAllRequests(){
    this.apicall.allwithdraw().subscribe(res=>{
      console.log(res)
      this.allWithdrawRequest = res;
    })
  }
  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result: any) => {
        // this.closeResult = `Closed with: ${result}`;
      },
      (reason: any) => {
        // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      },
    );
  }
  changeWidthrawStatus($event: any, item: any) {
    console.log($event.target.value)
    console.log(item)
    if($event.target.value != 'Select Status') {
      const status = {status: $event.target.value, id: item.id, user_id:item.user_id, amount: item.amount}
      this.apicall.allWithDrawStatusUpdate(status).subscribe(res=>{
        console.log(res)
        this.getAllRequests();
        if(res.error == false) {
          if($event.target.value == 'Approve') {
            const mesg = `Your have sucessfully paid Rs. ${item.amount}`
            this.toast.SuccessToast(mesg,'Congratulation!')
          }
          if($event.target.value == 'Rejected') {
            const mesg = `Your have Rejected withdraw of Rs. ${item.amount}`
            this.toast.WarningToast(mesg,'Good Job!!')
          }
        }
      })
    }
    else {
      console.log('other')
    }

  }


}
