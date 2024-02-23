import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { check } from 'src/app/localStorage/LocalStorage';
import { ApicallService } from 'src/app/services/apicall.service';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit{
  public segmentvalue : any  = "chat";
  public list: any = [
    {img:'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp',
    name:'Marie Horwitz',
    time:'Just now',
    MsgNo:'3'},
    {img:'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp',
    name:'Alexa Chung',
    time:'5 mins',
    MsgNo:'1'},
  ];
  userFriends: any;
  filterTerm!: string;
  GroupfilterTerm!: string;
  allGroups: any;
  constructor(
    private route: Router,
    private apicall : ApicallService
    ){
      console.log(this.list)
    } 
  ngOnInit() {
    this.getuserFriend();
    this.getGroups();
  }
  activeTab(tab:string) {
    console.log(tab)
    this.segmentvalue = tab;
  }
  async getuserFriend() {
    const user: any = await check('user');
    const userData = JSON.parse(user);
    console.log(userData);
    this.apicall.api_getUserChats(userData.username).subscribe(friends=>{
      console.log(friends)
      this.userFriends = friends;
    })
  }

  async getGroups() {
    const user: any = await check('user');
    const userData = JSON.parse(user);
    console.log(userData);
    this.apicall.api_getGroup(userData.username).subscribe(groups=>{
      console.log(groups)
      this.allGroups =  groups;
    })
  }

  goTOChatBox(item:any) {
    console.log(item)
    this.route.navigate(['chatbox'], {state : {data:item}})
  }
  groupback(item:any) {
    console.log(item)
    this.route.navigate(['groupchat'], {state : {data:item}})
  }
}
