import { Component, OnInit } from '@angular/core';
import { ApicallService } from 'src/app/services/apicall.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-allvedio',
  templateUrl: './allvedio.component.html',
  styleUrls: ['./allvedio.component.scss']
})
export class AllvedioComponent implements OnInit{
public  allVideos: any;

constructor(private apicall : ApicallService, private toast : ToastService) {
  this.getVideo()
}
  ngOnInit(): void {
    this.getVideo()
  }
getVideo() {
  this.apicall.getAllVideos().subscribe(videos=>{
    console.log(videos)
    this.allVideos = videos
  })
}

deleteVideo(vid:number) {
  if (confirm("Are you sure to delete this!") == true) {
    this.apicall.deleteVideo(vid).subscribe(res=>{
      console.log(res)
      if(res.error == false) {
        this.getVideo();
        this.toast.SuccessToast('Video Deleted Successfully', 'Good Job!')
      }
      else{
        this.toast.ErrorToast('Video Not Deleted', 'Sorry!')
      }
    })
  } else {
  const cancel = "You canceled!";
    console.log(cancel)
  }
}

}
