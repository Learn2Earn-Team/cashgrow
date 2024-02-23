import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { check } from 'src/app/localStorage/LocalStorage';
import { ApicallService } from 'src/app/services/apicall.service';

@Component({
  selector: 'app-bonushistory',
  templateUrl: './bonushistory.component.html',
  styleUrls: ['./bonushistory.component.scss'],
})
export class BonushistoryComponent {
  public Bonscards:any=[
    {
       UserCode:'02',
       UserId:'Amna',
       UserName:'090',
       Amount:'Ali@gmail.com',
       Sponser:' 234',  
       Name:'Ali',
       Date:'02-11-23'
    },
    {
      UserCode:'02',
      UserId:'Amna',
      UserName:'090',
      Amount:'Ali@gmail.com',
      Sponser:' 234',  
      Name:'Ali',
      Date:'02-11-23'
   },
   {
    UserCode:'02',
    UserId:'Amna',
    UserName:'090',
    Amount:'Ali@gmail.com',
    Sponser:' 234',  
    Name:'Ali',
    Date:'02-11-23'
 },
    
  ];
  public userDeposits: any = {};
  public userobj: any = {};
  public user: any;
  pageSize = 20;
  p = 1;
  public segmentvalue : any  = "team";
  public userTransferData: any = [];
  tranferAmount: any;
  userWithdrawHistory: any;
  constructor(private apiCall: ApicallService, private modalService: NgbModal) {}

  ngOnInit() {
    this.getUserData();
    this.NewUserdata();
    this.userWithdrawdata();
  }

  activeTab(tab:string) {
    console.log(tab)
    this.segmentvalue = tab;
  }
  async getUserData() {
    this.user = await check('user');
    this.userobj = JSON.parse(this.user);
    this.apiCall.commissionHistory(this.userobj.id).subscribe((res) => {
      this.userDeposits = res;
    });
  }
  public async NewUserdata() {
     const user : any = await check('user');
    const userobj = JSON.parse(user);
    this.apiCall.cashwalltet(userobj.username).subscribe((res) => {
      console.log(res)
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

  public async userWithdrawdata() {
   const user : any = await  check("user");
    const userobj = JSON.parse(user)
    this.apiCall.withdrawHistory(userobj.id).subscribe(res => {
     this.userWithdrawHistory = res;
  
    })
  }

}
