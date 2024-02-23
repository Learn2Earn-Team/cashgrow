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
  constructor(public apicall : ApicallService,) {

  }
  
 async ngOnInit()  {
    const user : any = await check("user");
    const userData = JSON.parse(user)
    console.log(userData)
    this.apicall.getMyPackage(userData.id).subscribe(res=>{
      console.log(res)
      this.myPackages = res;
    })
  }
  

}
