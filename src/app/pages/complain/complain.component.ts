import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from "@angular/core";
import { Router } from "@angular/router";
import { check } from "src/app/localStorage/LocalStorage";
import { ApicallService } from "src/app/services/apicall.service";
import { ToastService } from "src/app/services/toast.service";

@Component({
  selector: "app-complain",
  templateUrl: "./complain.component.html",
  styleUrls: ["./complain.component.scss"],
})
export class ComplainComponent
  implements OnInit, AfterViewInit, AfterViewChecked
{
  @ViewChild("chatMessages") chatMessages!: ElementRef | undefined;
  public userMessage: any = { sender: "", message: "", reciver: "", reply: "" };
  allComplain: any;
  public other: any = "";
  private scrollInterval: any;
  private executed: boolean = false;
  stateData: any;
  public message: any;
  constructor(
    private apicall: ApicallService,
    private toast: ToastService,
    private router: Router
  ) {}
  async ngOnInit(): Promise<void> {
    const user: any = await check("user");
    const userData = JSON.parse(user);
    console.log(userData);
    if (userData.username == "google") {
      this.stateData = history.state.data;
      console.log(this.stateData);
      this.getComplain(this.stateData.username);
    } else {
      this.getComplain(userData.username);
    }
    this.other = userData.username;
    console.log("Active User", this.other);
  }

  ngAfterViewChecked(): void {
    this.scrollToBottom();
    this.setTimeInterval();
  }

  ngAfterViewInit(): void {
    this.scrollToBottom();
  }

  public async getComplain(username: any) {
    this.apicall.api_getcomplainusermessage(username).subscribe((complains) => {
      console.log(complains);
      this.allComplain = complains;
    });
  }

  // public async getComplain(username: any) {
  //   this.apicall.api_getcomplainusermessage(username).subscribe((complains) => {
  //     console.log(complains);
  //     this.allComplain = complains;
  //   });
  // }

  scrollToBottom(): void {
    const chatMessagesElement = this.chatMessages?.nativeElement;
    chatMessagesElement.scrollTop = chatMessagesElement.scrollHeight;
    console.log(chatMessagesElement.scrollTop);
  }

  setTimeInterval() {
    if (!this.executed) {
      this.scrollInterval = setTimeout(() => {
        this.scrollToBottom();
        this.executed = true;
      }, 500);
    }
  }

  ngOnDestroy() {
    clearTimeout(this.scrollInterval);
  }

  async addComplain() {
    const user: any = await check("user");
    const userData = JSON.parse(user);
    console.log(userData);
    if (userData.username == "google") {
      this.userMessage.reply = this.message;
      this.userMessage.sender = userData.username;
      this.userMessage.reciver = this.stateData.username;
      console.log(this.userMessage);
      this.apicall.api_addComplain(this.userMessage).subscribe((res) => {
        console.log(res);
        this.getComplain(this.stateData.username);
        this.userMessage = {
          sender: this.stateData.username,
          message: "",
          reciver: "",
          reply: "",
        };
        this.message = "";
        this.scrollToBottom();
      });
    } else {
      this.userMessage.message = this.message;
      this.userMessage.sender = userData.username;
      console.log(this.userMessage);
      this.apicall.api_addComplain(this.userMessage).subscribe((res) => {
        console.log(res);
        this.getComplain(userData.username);
        this.userMessage = {
          sender: userData.username,
          message: "",
          reciver: "",
          reply: "",
        };
        this.message = "";
        this.scrollToBottom();
      });
    }
    this.setTimeInterval();
  }

  goToBack() {
    this.router.navigate(["/default/index"]);
  }
}
