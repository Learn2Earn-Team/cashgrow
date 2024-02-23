import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { check } from 'src/app/localStorage/LocalStorage';
import { ApicallService } from 'src/app/services/apicall.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-channel-subscribe',
  templateUrl: './channel-subscribe.component.html',
  styleUrls: ['./channel-subscribe.component.scss']
})
export class ChannelSubscribeComponent implements OnInit{

public channelData : any = {id:'', name:'', url:'', created_at:''}
public shoeMessage : boolean = false;
public subscribedChannelData : any = {user_id:'', cid:'', image:''}
public isPackageActiveted : boolean = true;
    constructor(public apicall : ApicallService, private route : Router, private  toast : ToastService) {

    }
  async ngOnInit() {
    const user : any = await check("user");
    const userData = JSON.parse(user)
    console.log(userData)
    this.apicall.checkpackage(userData.id).subscribe(res=>{
      console.log(res)
      if(res.error == false) {
        this.isPackageActiveted = false
    this.getChannel();
      }
      else {
        this.isPackageActiveted = true
      }
    })
  }

 async getChannel() {
    const user : any = await check("user");
    const userData = JSON.parse(user)
    console.log(userData)
    this.subscribedChannelData.user_id = userData.id;
    this.apicall.userdailysubscribe(userData.id).subscribe(dailyLimit=>{
      console.log(dailyLimit)
      if(dailyLimit <= 5) {
        this.apicall.getsinglechannel().subscribe(channel =>{
          console.log(channel)
          this.channelData = channel;
          this.subscribedChannelData.cid = channel.id;
        })
        this.shoeMessage = false;
        console.log(this.shoeMessage)
      }
      else{
        this.shoeMessage = true;
        console.log(this.shoeMessage)
        console.log("To Day subscribe limit full")
      }
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
        this.subscribedChannelData.image = base64String;
    };
  }
  async addChannelSubscribedData() {
    const user : any = await check("user");
    const userData = JSON.parse(user)
    console.log(userData)
    console.log(this.subscribedChannelData)
    this.apicall.channelsubscribe(this.subscribedChannelData).subscribe(res=>{
      console.log(res)
      if(res.message  == "Already Subscribed") {
        this.toast.ErrorToast('You Already Subscribed this channel', 'Error')
      }
    else if (res.error == false) {
      const earningData = {user_id: userData.id, amount: 0.75}
      this.apicall.channelsubearning(earningData).subscribe(earning=>{
        console.log(earning)
      })
    }
    })
  }

}
