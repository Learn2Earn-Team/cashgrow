import { Component, OnInit } from '@angular/core';
 import { Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ApicallService } from 'src/app/services/apicall.service';


@Component({
  selector: 'app-groupdetails',
  templateUrl: './groupdetails.component.html',
  styleUrls: ['./groupdetails.component.scss']
})
export class GroupdetailsComponent implements OnInit {
  groupData: any;
  allMembers: any = [];

  public updateGroupData : any = {gid:'', name:'', image:''}


  constructor(
		config: NgbModalConfig,
		private modalService: NgbModal,
    private apicall : ApicallService,
    private route : Router
	) {

		config.backdrop = 'static';
		config.keyboard = false;
	}
  goToBack(){
    this.route.navigate(['groupchat'], {state : {data: this.updateGroupData}});
  }
	open(content:any) {
		this.modalService.open(content);
	}
  GoToGroup(){
    this.route.navigate(['/default/creat-group'])
  }
  ngOnInit() {
    this.groupData = history.state.data;
    console.log(this.groupData)
    this.updateGroupData = this.groupData;
    this.getGroupMemebers();
  }

  getGroupMemebers() {
    this.apicall.api_getGroupMember(this.groupData.gid).subscribe(members=>{
      console.log(members);
      this.allMembers = members;
    })
  }


  handleUpload($event:any) {
    console.log($event)
    console.log($event.target.files[0])
    const file = $event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64String = reader.result?.toString().split(',')[1];
      console.log(base64String);
        this.updateGroupData.image = base64String;
    };
  }


  updateGroup() {
    console.log(this.updateGroupData)
    this.apicall.api_updateGroup(this.updateGroupData).subscribe(res=>{
      console.log(res)
      this.goToBack();
      this.modalService.dismissAll();
    })
  }


}
