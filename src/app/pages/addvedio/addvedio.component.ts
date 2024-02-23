import { Component } from '@angular/core';
import { ApicallService } from 'src/app/services/apicall.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-addvedio',
  templateUrl: './addvedio.component.html',
  styleUrls: ['./addvedio.component.scss']
})
export class AddvedioComponent {
  public url :string = "";
  public userdata:any = {};
constructor( private apiCall : ApicallService, public toast : ToastService  ){

}
public addvideo():void {
    
  this.apiCall.addVideo(this.url).subscribe(res => {
    if(res.error === false){
      this.toast.SuccessToast('Video Added successfully', 'Good Job!')
      this.url = '';
   
  } 
 else {
  this.toast.ErrorToast('Video Not Added', 'Sorry!')
 }
  
  })
}
}
