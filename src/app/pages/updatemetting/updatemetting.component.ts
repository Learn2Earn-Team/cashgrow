import { Component, OnInit } from '@angular/core';
import { ApicallService } from 'src/app/services/apicall.service';

@Component({
  selector: 'app-updatemetting',
  templateUrl: './updatemetting.component.html',
  styleUrls: ['./updatemetting.component.scss']
})
export class UpdatemettingComponent implements OnInit{

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
    constructor(private apicall : ApicallService) {

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
  updateMeeting() {
    console.log(this.zoomMeetingData)
    this.apicall.updateZoomMeeting(this.zoomMeetingData).subscribe(zoomResponse=>{
      console.log(zoomResponse)
    })
  }



}
