import { Component } from '@angular/core';
import { ApicallService } from '../services/apicall.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent {
data: any;

constructor( public apicall: ApicallService){ 
  this.table();
}
table(){
  this.apicall.Allusers().subscribe(res=>{
    this.data=res
    console.log(this.data)
  })
}
delete(){
  
}

}
