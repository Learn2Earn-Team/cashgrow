import { Component, OnInit } from "@angular/core";
import { ApicallService } from "src/app/services/apicall.service";
import { ToastService } from "src/app/services/toast.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { Router } from "@angular/router";
import detectEthereumProvider from "@metamask/detect-provider";

@Component({
  selector: "app-paywithdraw",
  templateUrl: "./paywithdraw.component.html",
  styleUrls: ["./paywithdraw.component.scss"],
})
export class PaywithdrawComponent implements OnInit {
  public Paycards: any = [
    {
      No: "02",
      Name: "Amna",
      AmountRs: "090",
      Update: "Ali@gmail.com",
      Details: " 234",
    },
    {
      No: "02",
      Name: "Amna",
      AmountRs: "090",
      Update: "Ali@gmail.com",
      Details: " 234",
    },
    {
      No: "02",
      Name: "Amna",
      AmountRs: "090",
      Update: "Ali@gmail.com",
      Details: " 234",
    },
    {
      No: "02",
      Name: "Amna",
      AmountRs: "090",
      Update: "Ali@gmail.com",
      Details: " 234",
    },
  ];
  public auth: any = false;
  allWithdrawRequest: any;
  pageSize = 20;
  p = 1;
  constructor(
    private apicall: ApicallService,
    private toast: ToastService,
    private modalService: NgbModal,
    public route: Router
  ) {
    this.Auth();
  }
  public async Pay(request: any) {
    if (this.auth) {
      const provider: any = await detectEthereumProvider();
      provider
        .request({
          method: "eth_sendTransaction",
          params: [
            {
              from: "0xda2eD321763EA95f6Fcf2DEb8C53efb375685B6F",
              to: request.jdetail,
              value: +request.net,
            },
          ],
        })
        .then((txHash: any) => {
          console.log(txHash, "res");
          this.changeWidthrawStatus("Approve", request);
        })
        .catch((error: any) => {
          console.log(error, "Error");
          if (error.code === -32602) {
            this.toast.ErrorToast("Invalid User Address", "Error");
          }
          this.changeWidthrawStatus("Rejected", request);
          this.toast.ErrorToast("Payment Failed", "Rejected");
        });
    } else {
      this.toast.ErrorToast("Please Install MetaMast Extenstion", "Error");
    }
  }
  public async Auth() {
    const provider: any = await detectEthereumProvider();

    if (provider) {
      this.auth = true;
    } else {
      this.auth = false;
      this.toast.ErrorToast("Please install MetaMask!", "");
    }
  }

  ngOnInit() {
    this.getAllRequests();
  }

  getAllRequests() {
    this.apicall.allwithdraw().subscribe((res) => {
      console.log(res);
      this.allWithdrawRequest = res;
    });
  }
  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title" })
      .result.then(
        (result: any) => {
          // this.closeResult = `Closed with: ${result}`;
        },
        (reason: any) => {
          // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }
  changeWidthrawStatus($event: any, item: any) {
    console.log($event.target.value);
    console.log(item);
    if ($event.target.value != "Select Status") {
      const status = {
        status: $event.target.value,
        id: item.id,
        user_id: item.user_id,
        amount: item.amount,
      };
      this.apicall.allWithDrawStatusUpdate(status).subscribe((res) => {
        console.log(res);
        this.getAllRequests();
        if (res.error == false) {
          if ($event.target.value == "Approve") {
            const mesg = `Your have sucessfully paid Rs. ${item.amount}`;
            this.toast.SuccessToast(mesg, "Congratulation!");
          }
          if ($event.target.value == "Rejected") {
            const mesg = `Your have Rejected withdraw of Rs. ${item.amount}`;
            this.toast.WarningToast(mesg, "Good Job!!");
          }
        }
      });
    } else {
      console.log("other");
    }
  }
}
