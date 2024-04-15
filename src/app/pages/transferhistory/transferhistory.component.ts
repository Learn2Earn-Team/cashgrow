import { Component } from '@angular/core';
import { ApicallService } from 'src/app/services/apicall.service';

@Component({
  selector: 'app-transferhistory',
  templateUrl: './transferhistory.component.html',
  styleUrls: ['./transferhistory.component.scss']
})
export class TransferhistoryComponent {
  public Usercards:any=[
    {
       Orderno:'02',
       Name:'Amna',
       UserId:'090',
       PIN:' 234',
       Sponsar:'982934hgvjhhgkgc72',
       Email:'Ali@gmail.com',
       Contact:'ndbjhe',
       Whatsapp:'0925jhgkjghghcsh37912',
       Joining:'yes',
  },
  {
    Orderno:'02',
    Name:'Amna',
    UserId:'090',
    PIN:' 234',
    Sponsar:'982934hgvjhhgkgc72',
    Email:'Ali@gmail.com',
    Contact:'ndbjhe',
    Whatsapp:'0925jhgkjghghcsh37912',
    Joining:'yes',
   },
   {
    Orderno:'02',
    Name:'Amna',
    UserId:'090',
    PIN:' 234',
    Sponsar:'982934hgvjhhgkgc72',
    Email:'Ali@gmail.com',
    Contact:'ndbjhe',
    Whatsapp:'0925jhgkjghghcsh37912',
    Joining:'yes',
},
  ];
  public userdata:any = {};
  pageSize = 20;
  p = 1;
constructor( private apiCall : ApicallService){
    this.NewUserdata();
}
public NewUserdata():void {
    
  this.apiCall.transferhistory().subscribe(res => {
   this.userdata = res;
   console.log(this.NewUserdata)
  })
}
}
