import { Component } from '@angular/core';
import { ApicallService } from '../services/apicall.service';
@Component({
  selector: 'app-downloadapp',
  templateUrl: './downloadapp.component.html',
  styleUrls: ['./downloadapp.component.scss']
})
export class DownloadappComponent {
  data: any;
  name: any;
  ngOnInit(): void {
    this.mydailyprofit();
      }
      constructor(public apiCall:ApicallService){

      }
      mydailyprofit(){
        this.apiCall.mydailyprofit().subscribe((res:any)=>{
          console.log(res);
          this.data=res;
        })
       
      }
      pname(){
          if(this.data.pid===0){
           this.name='Basic'
          }
          else  if(this.data.pid===1){
            this.name='Prime'
           }
           else  if(this.data.pid===2){
            this.name='Prime Plus'
           }
           else  if(this.data.pid===3){
            this.name='Premium'
           }
           else{
            this.name='Premium Plus'
           }
      }
}

