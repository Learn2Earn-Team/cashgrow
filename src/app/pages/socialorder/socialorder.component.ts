import { Component, OnInit } from '@angular/core';
import { check } from 'src/app/localStorage/LocalStorage';
import { ApicallService } from 'src/app/services/apicall.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-socialorder',
  templateUrl: './socialorder.component.html',
  styleUrls: ['./socialorder.component.scss'],
})
export class SocialorderComponent implements OnInit{
public cards:any=[
  {
     No:'02',
     Name:'Amna',
     Id:'090',
     Email:'Ali@gmail.com',
     Packeges:' 234',
     Link:'982934hgvjhhgkgc72',
     Code:'ndbjhe',
     Whatsapp:'0925jhgkjghghcsh37912',
     status:'yes',
     Update:'No'
},
{
  No:'02',
  Name:'Amna',
  Id:'090',
  Email:'Ali@gmail.com',
  Packeges:' 234',
  Link:'98293472',
  Code:'ndbjhe',
  Whatsapp:'092537912',
  status:'yes',
  Update:'No'
},
{
  No:'02',
  Name:'Amna',
  Id:'090',
  Email:'Ali@gmail.com',
  Packeges:' 234',
  Link:'98293472',
  Code:'ndbjhe',
  Whatsapp:'092537912',
  status:'yes',
  Update:'No'
}
];

  public product: any = {};
  pageSize = 20;
  p = 1;
  public isUpdate = true;
  public orderDetail: any = {
    link: '',
    code: '',
    wa_number: '',
  };
  userData: any;
  constructor(private apiCall: ApicallService, private toast : ToastService) {
    this.NewUserdata();
  }
  async ngOnInit(): Promise<void> {
    const user : any = await check("user");
  this.userData = JSON.parse(user)
  console.log(this.userData)
  }
  public NewUserdata(): void {
    this.apiCall.allSocialOrder().subscribe((res) => {
      this.product = res;
    });
  }
  UpdateStatus($event: any, item: any) {
    const status = {
      status: $event.target.value,
      id: item.id,
    };
    this.apiCall.OrderStatusupdate(status).subscribe((res) => {
      this.NewUserdata();
    });
  }

  activeUpdate(item:any) {
    console.log(item)
    this.orderDetail = item;
    this.isUpdate = false;
  }

  updateOrder() {
    console.log(this.orderDetail)
    this.apiCall.api_updateSocialOrder(this.orderDetail).subscribe(res=>{
      console.log(res)
      this.NewUserdata();
      this.toast.SuccessToast('order updated', 'Good Job')
      this.isUpdate = true;
    })
  }

  cancelUpdate() {
    this.NewUserdata();
    this.isUpdate = true;
  }

}
