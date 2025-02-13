import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import {
  CommonModule,
  HashLocationStrategy,
  LocationStrategy,
} from "@angular/common";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./pages/login/login.component";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ToastrModule } from "ngx-toastr";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { NgxPrintModule } from "ngx-print";
import { NgApexchartsModule } from "ng-apexcharts";
import { HomeComponent } from "./pages/home/home.component";
import { ProfileComponent } from "./pages/profile/profile.component";
import { CashwalletdetailsComponent } from "./pages/cashwalletdetails/cashwalletdetails.component";
import { WithdrawhistoryComponent } from "./pages/withdrawhistory/withdrawhistory.component";
import { BonushistoryComponent } from "./pages/bonushistory/bonushistory.component";
import { InternaltransferComponent } from "./pages/internaltransfer/internaltransfer.component";
import { CashtowalletComponent } from "./pages/cashtowallet/cashtowallet.component";
import { TiktokagencyComponent } from "./pages/tiktokagency/tiktokagency.component";
import { YoutubeagencyComponent } from "./pages/youtubeagency/youtubeagency.component";
import { InstagramagencyComponent } from "./pages/instagramagency/instagramagency.component";
import { MysocialorderComponent } from "./pages/mysocialorder/mysocialorder.component";
import { SocialdepositComponent } from "./pages/socialdeposit/socialdeposit.component";
import { FinancedepositeComponent } from "./pages/financedeposite/financedeposite.component";
import { PromotionsocialComponent } from "./pages/promotionsocial/promotionsocial.component";
import { WithdrawrequestComponent } from "./pages/withdrawrequest/withdrawrequest.component";
import { BuysocialComponent } from "./pages/buysocial/buysocial.component";
import { RegistrationformComponent } from "./pages/registrationform/registrationform.component";
import { TemsComponent } from "./pages/tems/tems.component";
import { VedioWatchingComponent } from "./pages/vedio-watching/vedio-watching.component";
import { ChannelSubscribeComponent } from "./pages/channel-subscribe/channel-subscribe.component";
import { MypackagesComponent } from "./pages/mypackages/mypackages.component";

import { DefaultlayoutModule } from "./Default/defaultlayout/defaultlayout.module";
import { ZoommeetingComponent } from "./pages/zoommeeting/zoommeeting.component";
import { TransferformComponent } from "./pages/transferform/transferform.component";
import { ResetPasswordComponent } from "./pages/reset-password/reset-password.component";
import { PaywithdrawComponent } from "./pages/paywithdraw/paywithdraw.component";
import { UpdatemettingComponent } from "./pages/updatemetting/updatemetting.component";
import { AddproductComponent } from "./pages/addproduct/addproduct.component";
import { SocialorderComponent } from "./pages/socialorder/socialorder.component";
import { UserdashboardComponent } from "./pages/userdashboard/userdashboard.component";
import { AddchanelComponent } from "./pages/addchanel/addchanel.component";
import { AllchanelComponent } from "./pages/allchanel/allchanel.component";
import { AddvedioComponent } from "./pages/addvedio/addvedio.component";
import { AllvedioComponent } from "./pages/allvedio/allvedio.component";
import { AllaproveddepositComponent } from "./pages/allaproveddeposit/allaproveddeposit.component";
import { BydatereporttotalComponent } from "./pages/bydatereporttotal/bydatereporttotal.component";
import { NewuserComponent } from "./pages/newuser/newuser.component";
import { AlluserComponent } from "./pages/alluser/alluser.component";
import { ActivepackagComponent } from "./pages/activepackag/activepackag.component";
import { ExpirepackagComponent } from "./pages/expirepackag/expirepackag.component";
import { UpdateSocialComponent } from "./pages/update-social/update-social.component";
import { InternaltransferdetailComponent } from "./pages/internaltransferdetail/internaltransferdetail.component";
import { NgxPaginationModule } from "ngx-pagination"; // Import the NgxPaginationModule
import { UserdashboarddetailsComponent } from "./pages/userdashboarddetails/userdashboarddetails.component";
import { DataentryComponent } from "./pages/dataentry/dataentry.component";
import { ForgetpasswordComponent } from "./pages/forgetpassword/forgetpassword.component";
import { AppprifileComponent } from "./pages/appprifile/appprifile.component";
import { ChatboxComponent } from "./pages/chatbox/chatbox.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FollowUserComponent } from "./pages/follow-user/follow-user.component";
import { PostpageComponent } from "./pages/postpage/postpage.component";
import { ViewPostComponent } from "./pages/view-post/view-post.component";
import { UploadStatusComponent } from "./pages/upload-status/upload-status.component";
import { ShowStatusComponent } from "./pages/show-status/show-status.component";
import { GroupchatComponent } from "./pages/groupchat/groupchat.component";
import { CreatgroupComponent } from "./pages/creatgroup/creatgroup.component";
import { NgxLoadingModule, ngxLoadingAnimationTypes } from "ngx-loading";
import { CustomDatePipe } from "./pipes/custom-date.pipe";
import { GroupdetailsComponent } from "./pages/groupdetails/groupdetails.component";
import { UserpostviewComponent } from "./pages/userpostview/userpostview.component";
import { CalculatorComponent } from "./pages/calculator/calculator.component";
import { MyprofileComponent } from "./pages/myprofile/myprofile.component";
import { FollowerspageComponent } from "./pages/followerspage/followerspage.component";
import { ShareProfileComponent } from "./pages/share-profile/share-profile.component";
import { FacebookagencyComponent } from "./pages/facebookagency/facebookagency.component";
import { ComplainComponent } from "./pages/complain/complain.component";
import { PrivacyPolicyComponent } from "./privacy-policy/privacy-policy.component";
import { ComplainboxComponent } from "./pages/complainbox/complainbox.component";
import { ChaticonComponent } from "./common/chaticon/chaticon.component";
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { TeamComponent } from "./pages/team/team.component";
import { RewardComponent } from "./pages/reward/reward.component";
import { GetrewardComponent } from "./pages/getreward/getreward.component";
import { AuthComponent } from "./pages/auth/auth.component";
import { DownloadappComponent } from "./downloadapp/downloadapp.component";
import { TransferhistoryComponent } from "./pages/transferhistory/transferhistory.component";
import { ApproveddepositeComponent } from "./pages/approveddeposite/approveddeposite.component";
import { EditUserComponent } from "./edit-user/edit-user.component";
import { PackageHistoryComponent } from "./package-history/package-history.component";
import { environment } from "src/environments/environment";
// import { SearchFilter } from './pipes/search-filter.pipe';
@NgModule({
  declarations: [
    AppComponent,
    // DefaultlayoutComponent,
    // HeaderComponent,
    // SidebarComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    CashwalletdetailsComponent,
    WithdrawhistoryComponent,
    BonushistoryComponent,
    InternaltransferComponent,
    CashtowalletComponent,
    TiktokagencyComponent,
    YoutubeagencyComponent,
    InstagramagencyComponent,
    MysocialorderComponent,
    SocialdepositComponent,
    FinancedepositeComponent,
    PromotionsocialComponent,
    WithdrawrequestComponent,
    BuysocialComponent,
    RegistrationformComponent,
    TemsComponent,
    VedioWatchingComponent,
    ChannelSubscribeComponent,
    MypackagesComponent,
    ZoommeetingComponent,
    TransferformComponent,
    ResetPasswordComponent,
    PaywithdrawComponent,
    UpdatemettingComponent,
    AddproductComponent,
    SocialorderComponent,
    UserdashboardComponent,
    AddchanelComponent,
    AllchanelComponent,
    AddvedioComponent,
    AllvedioComponent,
    AllaproveddepositComponent,
    BydatereporttotalComponent,
    NewuserComponent,
    AlluserComponent,
    ActivepackagComponent,
    ExpirepackagComponent,
    UpdateSocialComponent,
    InternaltransferdetailComponent,
    UserdashboarddetailsComponent,
    DataentryComponent,
    ForgetpasswordComponent,
    AppprifileComponent,
    ChatboxComponent,
    FollowUserComponent,
    PostpageComponent,
    ViewPostComponent,
    UploadStatusComponent,
    ShowStatusComponent,
    GroupchatComponent,
    CreatgroupComponent,
    CustomDatePipe,
    GroupdetailsComponent,
    UserpostviewComponent,
    CalculatorComponent,
    MyprofileComponent,
    FollowerspageComponent,
    ShareProfileComponent,
    FacebookagencyComponent,
    ComplainComponent,
    PrivacyPolicyComponent,
    ComplainboxComponent,
    TeamComponent,
    RewardComponent,
    GetrewardComponent,
    AuthComponent,
    DownloadappComponent,
    TransferhistoryComponent,
    ApproveddepositeComponent,
    EditUserComponent,
    PackageHistoryComponent,
    // ChaticonComponent
    // SearchFilter,
    // LoadingOverlayComponent,
    // DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    BrowserAnimationsModule,
    NgxPrintModule,
    NgxPaginationModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      closeButton: true,
      // progressBar: true,
    }),
    NgApexchartsModule,

    DefaultlayoutModule,
    NgbModule,
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.wanderingCubes,
      backdropBackgroundColour: "rgba(0,0,0,0.1)",
      backdropBorderRadius: "4px",
      primaryColour: "#ffffff",
      secondaryColour: "#ffffff",
      tertiaryColour: "#ffffff",
    }),
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
