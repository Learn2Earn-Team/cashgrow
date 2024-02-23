import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { check } from 'src/app/localStorage/LocalStorage';
import { ApicallService } from 'src/app/services/apicall.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-creatgroup',
  templateUrl: './creatgroup.component.html',
  styleUrls: ['./creatgroup.component.scss']
})
export class CreatgroupComponent implements OnInit{

  public groupData : any = {name:'', username:'', image:''}
  userGroups: any;
  imgElement!: HTMLImageElement;
  filterTerm!: string;
  userFriends: any;
  groupId: number | undefined;
  public groupMembersData : any = [];
  constructor(private modalService: NgbModal, private apicall : ApicallService, private router : Router, private toast : ToastService) {

  }
  ngOnInit(): void {
   this.getUserGroups();
   this.getuserFriend();
  }
  open(content: any, gid:number) {
    this.groupId = gid
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result: any) => {
        // this.closeResult = `Closed with: ${result}`;
      },
      (reason: any) => {
        // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      },
    );
  }

  async getUserGroups() {
    const user :any = await check("user");
    const userData = JSON.parse(user)
    this.apicall.api_getUserGroup(userData.username).subscribe(groups=>{
      console.log(groups)
      this.userGroups = groups;
    })
  }

  async getuserFriend() {
    const user: any = await check('user');
    const userData = JSON.parse(user);
    console.log(userData);
    this.apicall.api_getuserFriend(userData.username).subscribe(friends=>{
      console.log(friends)
      this.userFriends = friends;
    })
  }

  groupImageUpload($event: any) {
    const file = $event.target.files[0];
    this.imgElement = document.getElementById('previewImage') as HTMLImageElement;
  
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imgElement!.src = e.target.result;
        const base64String = reader.result?.toString().split(',')[1];
        console.log(base64String);
        this.groupData.image = base64String;
      };
      reader.readAsDataURL(file);
    }
  }
  
  async createGroup() {
    const user :any = await check("user");
    const userData = JSON.parse(user)
    this.groupData.username = userData.username;
    console.log(this.groupData)
    console.log(this.groupData)
    this.apicall.api_createGroup(this.groupData).subscribe(group=>{
      console.log(group)
      this.getUserGroups();
      this.groupData = {name:'', username:userData.username, image:''};
      this.imgElement!.src = 'assets/boy-icon-png-10.jpg.png';
    })
  }


  SelectUser(item:any) {
    if (this.groupMembersData.length === 0) {
      this.groupMembersData.push({ gid: this.groupId, username: item.reciver, name:item.name, image: item.image });
      console.log(this.groupMembersData);
    } else {
      const foundIndex = this.groupMembersData.findIndex(
        (savedItem:any) => savedItem.username === item.reciver
      );
      if (foundIndex !== -1) {
        this.groupMembersData.splice(foundIndex, 1);
        console.log('Removed existing item:', this.groupMembersData);
      } else {
        this.groupMembersData.push({ gid: this.groupId, username: item.reciver, name:item.name, image: item.image });
        console.log('Added new item:', this.groupMembersData);
      }
    }
  }

  removeUser(i:number) {
    this.groupMembersData.splice(i, 1);
    console.log(this.groupMembersData)
  }

  closeModel() {
    this.modalService.dismissAll();
    this.groupMembersData = [];
    console.log(this.groupMembersData)
  }
 
  addMember() {
    console.log(this.groupMembersData)
    this.apicall.api_addGroupMember(this.groupMembersData).subscribe(res=>{
      console.log(res)
      if(res.error == false) {
        this.toast.SuccessToast('Group Member Added', 'Good Job!');
        this.closeModel();
      }
    })
  }

}
