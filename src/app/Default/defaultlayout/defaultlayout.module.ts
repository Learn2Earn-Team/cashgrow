import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DefaultlayoutComponent } from './defaultlayout.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from 'src/app/common/header/header.component';
import { SidebarComponent } from 'src/app/common/sidebar/sidebar.component';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ProfileComponent } from 'src/app/pages/profile/profile.component';
import { CashwalletdetailsComponent } from 'src/app/pages/cashwalletdetails/cashwalletdetails.component';
import { WithdrawhistoryComponent } from 'src/app/pages/withdrawhistory/withdrawhistory.component';
import { BonushistoryComponent } from 'src/app/pages/bonushistory/bonushistory.component';
import { InternaltransferComponent } from 'src/app/pages/internaltransfer/internaltransfer.component';
import { CashtowalletComponent } from 'src/app/pages/cashtowallet/cashtowallet.component';
import { IndexComponent } from 'src/app/pages/index/index.component';
import { TiktokagencyComponent } from 'src/app/pages/tiktokagency/tiktokagency.component';
import { YoutubeagencyComponent } from 'src/app/pages/youtubeagency/youtubeagency.component';
import { InstagramagencyComponent } from 'src/app/pages/instagramagency/instagramagency.component';
import { MysocialorderComponent } from 'src/app/pages/mysocialorder/mysocialorder.component';
import { SocialdepositComponent } from 'src/app/pages/socialdeposit/socialdeposit.component';
import { FinancedepositeComponent } from 'src/app/pages/financedeposite/financedeposite.component';
import { PromotionsocialComponent } from 'src/app/pages/promotionsocial/promotionsocial.component';
import { WithdrawrequestComponent } from 'src/app/pages/withdrawrequest/withdrawrequest.component';
import { FacebookagencyComponent } from 'src/app/pages/facebookagency/facebookagency.component';
import { MynetworkComponent } from 'src/app/pages/mynetwork/mynetwork.component';
import { RegistrationformComponent } from 'src/app/pages/registrationform/registrationform.component';
import { VedioWatchingComponent } from 'src/app/pages/vedio-watching/vedio-watching.component';
import { ChannelSubscribeComponent } from 'src/app/pages/channel-subscribe/channel-subscribe.component';
import { MypackagesComponent } from 'src/app/pages/mypackages/mypackages.component';
 import { ZoommeetingComponent } from 'src/app/pages/zoommeeting/zoommeeting.component';
import { PaywithdrawComponent } from 'src/app/pages/paywithdraw/paywithdraw.component';
import { UpdatemettingComponent } from 'src/app/pages/updatemetting/updatemetting.component';
import { AddproductComponent } from 'src/app/pages/addproduct/addproduct.component';
import { SocialorderComponent } from 'src/app/pages/socialorder/socialorder.component';
import { UserdashboardComponent } from 'src/app/pages/userdashboard/userdashboard.component';
import { AddchanelComponent } from 'src/app/pages/addchanel/addchanel.component';
import { AllchanelComponent } from 'src/app/pages/allchanel/allchanel.component';
import { AddvedioComponent } from 'src/app/pages/addvedio/addvedio.component';
import { AllvedioComponent } from 'src/app/pages/allvedio/allvedio.component';
import { AllaproveddepositComponent } from 'src/app/pages/allaproveddeposit/allaproveddeposit.component';
import { BydatereporttotalComponent } from 'src/app/pages/bydatereporttotal/bydatereporttotal.component';
import { NewuserComponent } from 'src/app/pages/newuser/newuser.component';
import { AlluserComponent } from 'src/app/pages/alluser/alluser.component';
import { ActivepackagComponent } from 'src/app/pages/activepackag/activepackag.component';
import { ExpirepackagComponent } from 'src/app/pages/expirepackag/expirepackag.component';
import { UpdateSocialComponent } from 'src/app/pages/update-social/update-social.component';
import { LoginGuard } from 'src/app/auth/guards/login.guard';
import { InternaltransferdetailComponent } from 'src/app/pages/internaltransferdetail/internaltransferdetail.component';
import { UserdashboarddetailsComponent } from 'src/app/pages/userdashboarddetails/userdashboarddetails.component';
import { DataentryComponent } from 'src/app/pages/dataentry/dataentry.component';
import { TabbarComponent } from 'src/app/common/tabbar/tabbar.component';
import { AppprifileComponent } from 'src/app/pages/appprifile/appprifile.component';
import { ChatComponent } from 'src/app/pages/chat/chat.component';
import { ChatboxComponent } from 'src/app/pages/chatbox/chatbox.component';
import { FollowUserComponent } from 'src/app/pages/follow-user/follow-user.component';
import { PostpageComponent } from 'src/app/pages/postpage/postpage.component';
import { ViewPostComponent } from 'src/app/pages/view-post/view-post.component';
import { UploadStatusComponent } from 'src/app/pages/upload-status/upload-status.component';
import { ShowStatusComponent } from 'src/app/pages/show-status/show-status.component';
import { GroupchatComponent } from 'src/app/pages/groupchat/groupchat.component';
import { CreatgroupComponent } from 'src/app/pages/creatgroup/creatgroup.component';
import { ShareModule } from 'src/app/shared/share/share.module';
import { UserpostviewComponent } from 'src/app/pages/userpostview/userpostview.component';
import { GroupdetailsComponent } from 'src/app/pages/groupdetails/groupdetails.component';
import { MyprofileComponent } from 'src/app/pages/myprofile/myprofile.component';
import { ComplainComponent } from 'src/app/pages/complain/complain.component';
import { ComplainboxComponent } from 'src/app/pages/complainbox/complainbox.component';
import { ChaticonComponent } from 'src/app/common/chaticon/chaticon.component';
import { AddpackageComponent } from 'src/app/pages/addpackage/addpackage.component';
import { TeamreportComponent } from 'src/app/pages/teamreport/teamreport.component';
import { TeamComponent } from 'src/app/pages/team/team.component';
import { GetrewardComponent } from 'src/app/pages/getreward/getreward.component';
import { RewardComponent } from 'src/app/pages/reward/reward.component';

const routes: Routes = [
    // { path: '', redirectTo: '/layout', pathMatch: 'full', data: { title: 'Layout' } },
    {
      path: '', component: DefaultlayoutComponent,
      // canActivate: [MainGuard],
      // canLoad: [MainGuard],
      children:
        [
          { path: '', redirectTo: '/default/dashboard', pathMatch: 'full' },
          // { path: 'default/dashboard', component: DashboardComponent , canActivate: [LoginGuard]},
          { path: 'default/profile', component: ProfileComponent , canActivate: [LoginGuard]},
          { path: 'default/cashdetails', component: CashwalletdetailsComponent , canActivate: [LoginGuard]},
          { path: 'default/withdrawhistory', component: WithdrawhistoryComponent , canActivate: [LoginGuard]},
          { path: 'default/bonushistory', component: BonushistoryComponent , canActivate: [LoginGuard]},
          { path: 'default/internaltransfer', component: InternaltransferComponent , canActivate: [LoginGuard]},
          { path: 'default/cashtowallet', component: CashtowalletComponent , canActivate: [LoginGuard]},
          { path: 'default/index', component: IndexComponent , canActivate: [LoginGuard]},
          { path: 'default/tiktokeagency', component: TiktokagencyComponent , canActivate: [LoginGuard]},
          { path: 'default/youtubeagency', component: YoutubeagencyComponent , canActivate: [LoginGuard]},
          { path: 'default/instagramagency', component: InstagramagencyComponent , canActivate: [LoginGuard]},
          { path: 'default/mysocialorder', component: MysocialorderComponent , canActivate: [LoginGuard]},
          { path: 'default/socialdeposit', component: SocialdepositComponent , canActivate: [LoginGuard]},
          { path: 'default/financedeposit', component: FinancedepositeComponent , canActivate: [LoginGuard]},
          { path: 'default/promotionsocial', component: PromotionsocialComponent , canActivate: [LoginGuard]},
          { path: 'default/withdrawrequest', component: WithdrawrequestComponent , canActivate: [LoginGuard]},
          { path: 'default/facebookagency', component: FacebookagencyComponent , canActivate: [LoginGuard]},
          { path: 'default/vedio-watching', component: VedioWatchingComponent , canActivate: [LoginGuard]},
          { path: 'default/channel-subscribe', component: ChannelSubscribeComponent , canActivate: [LoginGuard]},
          { path: 'default/mypackages', component: MypackagesComponent , canActivate: [LoginGuard]}, 
           { path: 'default/mynetwork', component: MynetworkComponent , canActivate: [LoginGuard]},
          { path: 'default/zoommeeting', component: ZoommeetingComponent , canActivate: [LoginGuard]},
          { path: 'default/paywithdraw', component: PaywithdrawComponent , canActivate: [LoginGuard]},
          { path: 'default/updatemetting', component: UpdatemettingComponent , canActivate: [LoginGuard]},
          { path: 'default/addproduct', component: AddproductComponent , canActivate: [LoginGuard]},
          { path: 'default/socialorder', component: SocialorderComponent , canActivate: [LoginGuard]},
          { path: 'default/userdashboard', component: UserdashboardComponent , canActivate: [LoginGuard]},
          { path: 'default/addchanel', component: AddchanelComponent , canActivate: [LoginGuard]},
          { path: 'default/allchanel', component: AllchanelComponent , canActivate: [LoginGuard]},
          { path: 'default/addvedio', component: AddvedioComponent , canActivate: [LoginGuard]},
          { path: 'default/allvedio', component: AllvedioComponent , canActivate: [LoginGuard]},
          { path: 'default/allapproveddeposite', component: AllaproveddepositComponent , canActivate: [LoginGuard]},
          { path: 'default/bydatereport', component: BydatereporttotalComponent , canActivate: [LoginGuard]},
          { path: 'default/newuser', component: NewuserComponent , canActivate: [LoginGuard]},
          { path: 'default/alluser', component: AlluserComponent , canActivate: [LoginGuard]},
          { path: 'default/activepackage', component: ActivepackagComponent , canActivate: [LoginGuard]},
          { path: 'default/expirepackage', component: ExpirepackagComponent , canActivate: [LoginGuard]},
          { path: 'default/update-social', component: UpdateSocialComponent , canActivate: [LoginGuard]},
          { path: 'default/userdashboarddetails', component: UserdashboarddetailsComponent , canActivate: [LoginGuard]},
          { path: 'default/dataentry', component: DataentryComponent , canActivate: [LoginGuard]},
          { path: 'default/appprofile', component: AppprifileComponent , canActivate: [LoginGuard]},
          { path: 'default/chat', component: ChatComponent , canActivate: [LoginGuard]},
          { path: 'default/follow-user', component: FollowUserComponent, canActivate: [LoginGuard]},
          { path: 'default/view-post', component: ViewPostComponent, canActivate: [LoginGuard]},
          { path: 'default/post-page', component: PostpageComponent, canActivate: [LoginGuard]},
          { path: 'default/upload-status', component: UploadStatusComponent, canActivate: [LoginGuard]},
          { path: 'default/show-status', component: ShowStatusComponent, canActivate: [LoginGuard]},
          { path: 'default/creat-group', component: CreatgroupComponent, canActivate: [LoginGuard]},
          { path: 'default/user-post-view', component: UserpostviewComponent, canActivate: [LoginGuard]},
          { path: 'default/myprofile', component:MyprofileComponent, canActivate: [LoginGuard]},
          { path: 'default/followerspage', component:FollowUserComponent, canActivate: [LoginGuard]},
          { path: 'default/team', component: TeamComponent , canActivate: [LoginGuard]},
          { path: 'default/complainbox', component:ComplainboxComponent, canActivate: [LoginGuard]},
          { path: 'default/addpackage', component:AddpackageComponent, canActivate: [LoginGuard]},
          { path: 'default/reward', component: RewardComponent , canActivate: [LoginGuard]},
          { path: 'default/getreward', component: GetrewardComponent , canActivate: [LoginGuard]},



          // { path: 'default/complain', component:ComplainComponent, canActivate: [LoginGuard]},
          // { path: 'default/internaltransferdetail', component: InternaltransferdetailComponent , canActivate: [LoginGuard]},


      ]
    },
  ]
  
  @NgModule({
    declarations: [
        DefaultlayoutComponent,
        HeaderComponent,
        SidebarComponent,
        TabbarComponent,
        DashboardComponent,
        IndexComponent,
        ChatComponent,
        ChaticonComponent
    ],
    imports: [
      HttpClientModule,
      CommonModule,
      RouterModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule.forChild(routes),
      NgApexchartsModule,
      FormsModule,
      ShareModule
      
    ],
    exports: [RouterModule,IndexComponent, TabbarComponent, CommonModule, ChatComponent],
    providers: [
      {provide: LocationStrategy, useClass: HashLocationStrategy},
    ],
    bootstrap: [DefaultlayoutComponent],
    schemas:[CUSTOM_ELEMENTS_SCHEMA ]
  })
  export class DefaultlayoutModule {
   
   }
  