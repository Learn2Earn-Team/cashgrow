import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, OnDestroy, AfterViewChecked } from '@angular/core';
import { Router } from '@angular/router';
import { ApicallService } from 'src/app/services/apicall.service';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.scss']
})
export class ChatboxComponent implements OnInit, AfterViewInit, OnDestroy, AfterViewChecked{
  @ViewChild('chatMessages') chatMessages: ElementRef | undefined;

  
  goToBack() {
    this.router.navigate(['/default/chat']);
  }

public  userChatData: any = {};

  public chatData : any = {crid:'', message:'', image:'', sender:'', reciver:''}

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
    this.other = this.userChatData.sender;
    this.getUserChat();
    // const interval = setInterval(async () => {
    //   this.getUserChat();
    //   console.log(interval)
    // },5000)
  }

  getUserChat() {
    const userData = {sender:this.userChatData.sender, reciver:this.userChatData.reciver}
    this.apicall.api_getChat(userData).subscribe(chats=>{
      console.log(chats.message)
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

  addChat() {
    this.chatData.crid = this.userChatData.crid;
    this.chatData.sender = this.userChatData.sender;
    this.chatData.reciver = this.userChatData.reciver;
    this.chatData.message = this.message;
    this.chatData.image = 'dsj.png';
    this.apicall.api_insertChat(this.chatData).subscribe(res=>{
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
