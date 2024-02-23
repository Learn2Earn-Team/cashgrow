import { Component, OnInit } from '@angular/core';
import { ApicallService } from 'src/app/services/apicall.service';

@Component({
  selector: 'app-zoommeeting',
  templateUrl: './zoommeeting.component.html',
  styleUrls: ['./zoommeeting.component.scss']
})

export class ZoommeetingComponent implements OnInit {
 
public zoomMeetingData : any = {
  id: '',
  host: '',
  date: '',
  topic: '',
  created_at: '',
  updated_at: '',
  link: '',
  ids: '',
  code: ''
}

  
  constructor(private apicall : ApicallService)  {

  }
  ngOnInit(): void {
    this.getZoomMeeting();
  }

  getZoomMeeting() {
    this.apicall.getZoom().subscribe(zoomData=>{
      console.log(zoomData)
      this.zoomMeetingData = zoomData;
    })
  }
  

}

 