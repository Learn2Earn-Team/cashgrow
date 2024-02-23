import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { check } from 'src/app/localStorage/LocalStorage';
import { ApicallService } from 'src/app/services/apicall.service';

@Component({
  selector: 'app-groupchat',
  templateUrl: './groupchat.component.html',
  styleUrls: ['./groupchat.component.scss']
})
export class GroupchatComponent implements OnInit, AfterViewInit, OnDestroy, AfterViewChecked{
  @ViewChild('chatMessages') chatMessages: ElementRef | undefined;

  
  goToBack() {
    this.router.navigate(['/default/chat']);
  }
  goToNext(){
    this.router.navigate(['groupdetails'], {state : {data: this.userChatData}});
  }
public  userChatData: any = {};

  public chatData : any = {gid:'', message:'', image:'', username:''}

  public userMessages : any = [];
  public other:any = '';
  public message : any = '';
  private scrollInterval: any;
  private executed: boolean = false;

      constructor(private apicall: ApicallService, private router: Router) {
      }
  ngAfterViewChecked(): void {
    this.scrollToBottom();
    this.setTimeInterval();
  }
  ngOnInit() {
    this.userChatData = history.state.data;
    console.log(this.userChatData)
    this.getUserChat();
    // const interval = setInterval(async () => {
    //   this.getUserChat();
    //   console.log(interval)
    // },5000)
  }

  async getUserChat() {
    const user: any = await check('user');
    const userData = JSON.parse(user);
    console.log(userData);
    this.other = userData.username;
    const userChatData = {gid:this.userChatData.gid, username:userData.username}
    console.log(userChatData)
    this.apicall.api_getGroupChat(userChatData).subscribe(chats=>{
      console.log(chats)
      this.userMessages = chats.message;
    })
  }

  ngAfterViewInit(): void {
      this.scrollToBottom();
  }

  scrollToBottom(): void {
    const chatMessagesElement = this.chatMessages?.nativeElement;
    chatMessagesElement.scrollTop = chatMessagesElement.scrollHeight;
    console.log(chatMessagesElement.scrollTop)
  }
  
  setTimeInterval() {
    if (!this.executed) {
      this.scrollInterval =  setTimeout(() => {
          this.scrollToBottom();
          this.executed = true;
        }, 500); 
        console.log(this.scrollInterval)
      }
  }

  async addChat() {
    const user: any = await check('user');
    const userData = JSON.parse(user);
    console.log(userData);
    this.chatData.gid = this.userChatData.gid;
    this.chatData.username = userData.username;
    this.chatData.message = this.message;
    this.chatData.image = 'dsj.png';
    this.apicall.api_ggroupMessages(this.chatData).subscribe(res=>{
      console.log(res)
      this.getUserChat();
      this.message= '';
      this.scrollToBottom();
    })
this.setTimeInterval();
  }
  ngOnDestroy(): void {
  
  }
}
