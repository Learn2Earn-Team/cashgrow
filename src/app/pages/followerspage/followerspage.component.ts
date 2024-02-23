import { Component, OnInit } from '@angular/core';
import { ngxLoadingAnimationTypes } from 'ngx-loading';
import { check } from 'src/app/localStorage/LocalStorage';
import { ApicallService } from 'src/app/services/apicall.service';

@Component({
  selector: 'app-followerspage',
  templateUrl: './followerspage.component.html',
  styleUrls: ['./followerspage.component.scss']
})
export class FollowerspageComponent  implements OnInit{
  public Card: any = [
    {img:'../../../assets/images/profile 4.jpg',
    name:'Marie Horwitz',
    follow:'Follow'},
    {img:'../../../assets/images/profile 4.jpg',
    name:'Alexa Chung',
    follow:'Follow'},
    {img:'../../../assets/images/profile 4.jpg',
    name:'Marie Horwitz',
    follow:'Follow'},
    {img:'../../../assets/images/profile 4.jpg',
    name:'Alexa Chung',
    follow:'Follow'},
    {img:'../../../assets/images/profile 4.jpg',
    name:'Marie Horwitz',
    follow:'Follow'},
    {img:'../../../assets/images/profile 4.jpg',
    name:'Alexa Chung',
    follow:'Follow'},
    {img:'../../../assets/images/profile 4.jpg',
    name:'Marie Horwitz',
    follow:'Follow'},
    {img:'../../../assets/images/profile 4.jpg',
    name:'Alexa Chung',
    follow:'Follow'},
  ];

  public userTeams : any;
  public segmentvalue : any  = "team";
  userFriends: any;
  userRequest: any;
  userFollow: any;
  loading = false;
  filterTerm!: string;
  public ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;
  userData: any;
  constructor(private apicall : ApicallService) {
    this.getUserTeam();
    this.getuserFriend();
    this.getUserFollowRequest();
    this.getUserFollowPendingRequest();
  }
  ngOnInit() {
   this.getUserTeam();
   this.getuserFriend();
   this.getUserFollowRequest();
   this.getUserFollowPendingRequest();
  }

  activeTab(tab:string) {
    console.log(tab)
    this.segmentvalue = tab;
    if(tab == 'team') {
      this.getUserTeam();
    }
    else{
      this.getuserFriend();
      this.getUserFollowRequest();
      this.getUserFollowPendingRequest();
    }
  }

  async getUserTeam() {
    this.loading = true;
    const user: any = await check('user');
    const userData = JSON.parse(user);
    console.log(userData);
    this.userData = userData;
    //  api_getUserTeam
   await this.apicall.api_getallteam().subscribe(async allTeams=>{
      console.log(allTeams)
    await  this.apicall.api_getfollowstatu(allTeams, userData.username).subscribe(teams=>{
        console.log(teams)
        this.loading = false;
        this.userTeams = teams;
        console.log(this.userTeams)
      })
  
    })
  }

  async followRequest(uid:any) {
    const user: any = await check('user');
    const userData = JSON.parse(user);
    console.log(userData);
    const x = {sender:userData.username, reciver:uid}
    this.apicall.api_getfollowrequest(x).subscribe(res=>{
      console.log(res)
      this.getUserTeam();
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
  async getUserFollowRequest() {
    const user: any = await check('user');
    const userData = JSON.parse(user);
    console.log(userData);
    this.apicall.api_getUserFollowRequest(userData.username).subscribe(request=>{
      console.log(request)
      this.userRequest = request;
    })
  }

  async followRequestUpdate(item:any, userStatus:string) {
    const user: any = await check('user');
    const userData = JSON.parse(user);
    console.log(userData);
    const x = {id: item.id, status: userStatus, sender: item.username, reciver:userData.username}
    this.apicall.api_followRequestUpdate(x).subscribe(res=>{
      console.log(res)
      this.getuserFriend();
      this.getUserFollowRequest();
      this.getUserFollowPendingRequest();
    })
  }

   userUnfriend(item:any) {
    console.log(item)
    const x = {sender: item.sender, reciver:item.reciver}
    this.apicall.api_userUnfriend(x).subscribe(res=>{
      console.log(res)
      this.getuserFriend();
      this.getUserFollowRequest();
      this.getUserFollowPendingRequest();
    })
  }

  async getUserFollowPendingRequest() {
    const user: any = await check('user');
    const userData = JSON.parse(user);
    console.log(userData);
    this.apicall.api_getUserFollowPendingRequest(userData.username).subscribe(res=>{
      console.log(res)
      this.userFollow = res;
    })
  }

}
