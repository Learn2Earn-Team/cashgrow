import { Component, OnInit } from '@angular/core';
import { check } from 'src/app/localStorage/LocalStorage';
import { ApicallService } from 'src/app/services/apicall.service';

@Component({
  selector: 'app-mypackages',
  templateUrl: './mypackages.component.html',
  styleUrls: ['./mypackages.component.scss']
})
export class MypackagesComponent  implements OnInit{
  public isPackageActiveted : boolean = true;
  public myPackages : any;
  userprofit: any;
  constructor(public apicall : ApicallService,) {

  }
 async myorders(){  
  const user : any = await check("user");
  const userData = JSON.parse(user)
    this.apicall.myorders(userData.username).subscribe(res=>{
      this.myPackages=res;
      console.log(this.myPackages);
    })
  }
  async ngOnInit()  {
 this.myorders();
 this.userdailyprofit();
  }
 async userdailyprofit(){
 const user : any = await check("user");
    const userData = JSON.parse(user)
    console.log(userData)
    this.apicall.userdailyprofit(userData.username).subscribe(res=>{
this.userprofit=res;
console.log(this.userprofit);
    })
  }

  

}
