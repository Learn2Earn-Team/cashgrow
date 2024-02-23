import { Component } from '@angular/core';
import { ApicallService } from 'src/app/services/apicall.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-addchanel',
  templateUrl: './addchanel.component.html',
  styleUrls: ['./addchanel.component.scss']
})
export class AddchanelComponent {
  public channel:any = {
    url:"",
    name:""
  };
constructor( private apiCall : ApicallService, public toast : ToastService ){}
public NewChanneldata():void {
    
  this.apiCall.addChannel(this.channel).subscribe(res => {
   this.channel = res;
    if(res.error === false){
      this.toast.SuccessToast('Channel Added successfully', 'Good Job!')
      this.channel = {
        url:'',
        name:''
      };
    }
    else  {
      this.toast.ErrorToast('Video Not Added', 'Sorry!')
    }
  })
}
}
