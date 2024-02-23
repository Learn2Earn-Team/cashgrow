import { Component } from '@angular/core';
import { ApicallService } from 'src/app/services/apicall.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-allchanel',
  templateUrl: './allchanel.component.html',
  styleUrls: ['./allchanel.component.scss']
})
export class AllchanelComponent {
  public channel:any= {}
constructor( private apiCall : ApicallService, private toast : ToastService){
  this.AllChanneldata();
}
public AllChanneldata():void {
    
  this.apiCall.allChannel().subscribe(res => {
   this.channel = res;
  })
}
openYouTubeProfile( item:any) {
  window.open(item, '_blank');
}

deleteChannnels(id:number) {
  if (confirm("Are you sure to delete this!") == true) {
    this.apiCall.deleteChannel(id).subscribe(res=>{
      console.log(res)
      if(res.error == false) {
        this.AllChanneldata();
        this.toast.SuccessToast('Channel Deleted Successfully', 'Good Job!')
      }
      else{
        this.toast.ErrorToast('Channel Not Deleted', 'Sorry!')
      }
    })
  } else {
  const cancel = "You canceled!";
    console.log(cancel)
  }

}

}
