import { Component } from '@angular/core';
import { Clipboard } from '@capacitor/clipboard';
import { check } from 'src/app/localStorage/LocalStorage';
import { ToastService } from 'src/app/services/toast.service';
import { ApicallService } from 'src/app/services/apicall.service';
import { ngxLoadingAnimationTypes } from 'ngx-loading';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appprifile',
  templateUrl: './appprifile.component.html',
  styleUrls: ['./appprifile.component.scss']
})
export class AppprifileComponent {
 public userTotalFriendsDetail: any = {
  username: '',
  totalLikes: 0,
  totalFriends: 0,
  totalFollowing: 0
};
 public userPost: any = [];
 loading = false;

 public ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;
  constructor(
    private toast: ToastService,
    private apiCall: ApicallService,
    private route: Router,
  ) {
   
    this.GetUserData();
  }
  
  async copyUserId() {
    
    console.log(window.location.origin);
    const user: any = await check('user');
    const userData = JSON.parse(user);
    console.log(userData);
    const url = `https://Maclink.shop/#/registrationform?id=${userData.username}`;
    await Clipboard.write({
      string: url,
    }).then(
      () => {
        this.toast.SuccessToast('Linked Copied to clipboard', 'Successfully!');
      },
      () => {
        console.error('Failed to copy');
      }
    );
    const { type, value } = await Clipboard.read();
    console.log(`Got ${type} from clipboard: ${value}`);
   
  }
  public userobj :any = {};
  public user :any;
 

  ngOnInit() {
    this.GetUserData();
    this.getUserPostAndFriendsDetails();
  }
  public async GetUserData(){
    this.loading = true;
      this.user = await  check("user");
      const userData = JSON.parse(this.user)
      this.apiCall.GetuserProfileData(userData.id).subscribe(profile=>{
        this.loading = false;
        this.userobj = profile[0];
        console.log(this.userobj)
      })
  }

  async getUserPostAndFriendsDetails() {
  this.user = await  check("user");
  const userData = JSON.parse(this.user)
    this.apiCall.api_getUserPost(userData.username).subscribe(details=>{
      console.log(details)
      this.userTotalFriendsDetail = details.UserDetails[0];
      this.userPost = details.UserPosts;
    })
}
groupback() {
  this.route.navigate(['default/user-post-view'])
}
}
