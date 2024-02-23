import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApicallService } from 'src/app/services/apicall.service';

@Component({
  selector: 'app-complainbox',
  templateUrl: './complainbox.component.html',
  styleUrls: ['./complainbox.component.scss']
})
export class ComplainboxComponent implements OnInit{
  allComplains: any;
  constructor(private apicall : ApicallService, private route : Router) {}
  ngOnInit(): void {
    this.getAllCOmplaoin();
  }
  goTOChatBox(item:any) {
    console.log(item)
    this.route.navigate(['complain'], {state : {data:item}})
  }
  getAllCOmplaoin() {
    this.apicall.api_getcomplainuserse().subscribe(users=>{
      console.log(users)
      this.allComplains = users;
    })
  }
}
