import { Injectable } from "@angular/core";
import { GlobalService } from "./global.service";
import { Router } from "@angular/router";
import { AuthService, apiUrl } from "./auth.service";
import { ToastService } from "./toast.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, map } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class ApicallService {
  TeamReports(res: any, id: any) {
    throw new Error("Method not implemented.");
  }
  getordercomplete(arg0: string) {
    throw new Error("Method not implemented.");
  }

  data: any;
  constructor(
    public global: GlobalService,
    public router: Router,
    public authservice: AuthService,
    public toast: ToastService,
    private http: HttpClient
  ) {}
  // admin login

  public login(data: any): Observable<any> {
    return this.http.post(apiUrl + "login", data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  public getCountry(): Observable<any> {
    return this.http.get(apiUrl + "allcountry").pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  public getProduct(type: any): Observable<any> {
    return this.http.get(apiUrl + `product/${type}`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  public getuserOrders(id: any): Observable<any> {
    return this.http.get(apiUrl + `userorder/${id}`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public UpdateUser(userObj: any): Observable<any> {
    return this.http.post(apiUrl + `user/update`, userObj).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public signup(signupdata: any): Observable<any> {
    return this.http.post(apiUrl + `user/signup`, signupdata).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  public Order(userobj: any): Observable<any> {
    return this.http.post(apiUrl + `product/order`, userobj).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public userdata(userid: any): Observable<any> {
    return this.http.get(apiUrl + `userdetail/${userid}`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public deposit(userobj: any): Observable<any> {
    return this.http.post(apiUrl + `deposit`, userobj).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public ActivePackage(userobj: any): Observable<any> {
    return this.http
      .post(apiUrl + `activatepackage`, { user_id: userobj })
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
  public userdeposit(userid: any): Observable<any> {
    return this.http.get(apiUrl + `userdeposit/${userid}`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public activepackages(): Observable<any> {
    return this.http.get(apiUrl + `active/packages`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public Usersocialpromotion(): Observable<any> {
    return this.http.get(apiUrl + `user/packages`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public addWatchVideo(data: any): Observable<any> {
    return this.http.post(apiUrl + `watchvideo`, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public updateLevel(data: any): Observable<any> {
    return this.http.post(apiUrl + `updatelevel`, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  public getUserDailyWatch(userid: any): Observable<any> {
    return this.http.get(apiUrl + `userdailywatch/${userid}`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getVideos(): Observable<any> {
    return this.http.get(apiUrl + "allvideos").pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  public updateZoomMeeting(data: any): Observable<any> {
    return this.http.post(apiUrl + `zoom/update`, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public ReportByDate(data: any): Observable<any> {
    return this.http.post(apiUrl + `reportbydate`, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public weeklyReport(): Observable<any> {
    return this.http.get(apiUrl + "weeklyreport").pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  public getZoom(): Observable<any> {
    return this.http.get(apiUrl + "zoom").pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getNewUser(): Observable<any> {
    return this.http.get(apiUrl + "newuser").pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getAllUser(): Observable<any> {
    return this.http.get(apiUrl + "alluser").pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public addVideo(url: any): Observable<any> {
    return this.http.post(apiUrl + `addvideo`, url).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public allSocialOrder(): Observable<any> {
    return this.http.get(apiUrl + `allorder`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public addChannel(url: any): Observable<any> {
    return this.http.post(apiUrl + `addchannel`, url).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public allChannel(): Observable<any> {
    return this.http.get(apiUrl + `allchannel`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public InternalTranster(Transferdata: any): Observable<any> {
    return this.http.post(apiUrl + `internal/transfer`, Transferdata).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public cashwalltet(uid: any): Observable<any> {
    return this.http.get(apiUrl + `cashwallet/${uid}`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public withdrawHistory(uid: any): Observable<any> {
    return this.http.get(apiUrl + `userwithdraw/${uid}`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getsinglechannel(): Observable<any> {
    return this.http.get(apiUrl + `getsinglechannel`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public CheckUser(userAuth: any): Observable<any> {
    return this.http.post(apiUrl + `check/user`, userAuth).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public CheckdepositStatus(userAuth: any): Observable<any> {
    return this.http.post(apiUrl + `check/deposit`, userAuth).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public CheckWithdrawStatus(userAuth: any): Observable<any> {
    return this.http
      .post(apiUrl + `check/withdraw`, { user_id: userAuth })
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
  public userdailysubscribe(uid: any): Observable<any> {
    return this.http.get(apiUrl + `userdailysubscribe/${uid}`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public ApprovedDeposit(): Observable<any> {
    return this.http.get(apiUrl + `approved/deposit`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getuserBysponserId(uid: any): Observable<any> {
    return this.http.get(apiUrl + `getuserbysponserid/${uid}`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  public ExpirePackage(): Observable<any> {
    return this.http.get(apiUrl + `expirepackage`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public PendingDeposit(): Observable<any> {
    return this.http.get(apiUrl + `pending/deposit`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public checkpackage(uid: any): Observable<any> {
    return this.http.get(apiUrl + `checkpackage/${uid}`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  public channelsubscribe(data: any): Observable<any> {
    return this.http.post(apiUrl + `channelsubscribe`, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  public withdrawrequest(withdrawDetail: any): Observable<any> {
    return this.http.post(apiUrl + `withdrawrequest`, withdrawDetail).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  public watchearning(data: any): Observable<any> {
    return this.http.post(apiUrl + `watchearning`, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public channelsubearning(data: any): Observable<any> {
    return this.http.post(apiUrl + `channelsubearning`, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public depositeStatusupdate(data: any): Observable<any> {
    return this.http.post(apiUrl + `depositeStatus/update`, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public OrderStatusupdate(data: any): Observable<any> {
    return this.http.post(apiUrl + `orderStatus/update`, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public allwithdraw(): Observable<any> {
    return this.http.get(apiUrl + `allwithdraw`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public commissionHistory(uid: any): Observable<any> {
    return this.http.get(apiUrl + `Commissions/history/${uid}`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public allWithDrawStatusUpdate(data: any): Observable<any> {
    return this.http.post(apiUrl + `withdrawstatus/update`, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getMyPackage(uid: any): Observable<any> {
    return this.http.get(apiUrl + `getMyPackage/${uid}`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getdashboardData(uid: any, data: any): Observable<any> {
    return this.http.post(apiUrl + `dashboard/${uid}`, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getCashToWallet(uid: any): Observable<any> {
    return this.http.get(apiUrl + `cashtowallet/${uid}`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public GetuserProfileData(uid: any): Observable<any> {
    return this.http.get(apiUrl + `userdata/${uid}`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public updateUserImage(data: any): Observable<any> {
    return this.http.post(apiUrl + `update/image`, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public cashtoWallet(data: any): Observable<any> {
    return this.http.post(apiUrl + `cashtowallet`, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public UserDepost(data: any): Observable<any> {
    return this.http.post(apiUrl + `user/deposit`, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public deleteChannel(cid: any): Observable<any> {
    return this.http.get(apiUrl + `deletechannel/${cid}`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public deleteVideo(vid: any): Observable<any> {
    return this.http.get(apiUrl + `deletevideo/${vid}`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getAllVideos(): Observable<any> {
    return this.http.get(apiUrl + `getAllVideos`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getUserDashboardData(uid: any): Observable<any> {
    return this.http.get(apiUrl + `userdashboard/${uid}`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public addSocialsProduct(data: any): Observable<any> {
    return this.http.post(apiUrl + `addproduct`, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getUserDepositAmount(uid: any): Observable<any> {
    return this.http.get(apiUrl + `userdepositamount/${uid}`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public api_addUserWallet(data: any): Observable<any> {
    return this.http.post(apiUrl + `user/wallet`, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public api_addUserOrder(data: any): Observable<any> {
    return this.http.post(apiUrl + `user/order`, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public api_addUserWithdraw(data: any): Observable<any> {
    return this.http.post(apiUrl + `user/withdraw`, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public api_getAllProduct(): Observable<any> {
    return this.http.get(apiUrl + `allproduct`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public api_checkPassword(data: any): Observable<any> {
    return this.http.post(apiUrl + `check/password`, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public api_checkpackage(data: any): Observable<any> {
    return this.http.post(apiUrl + `check/package`, { username: data }).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public api_resetDetail(data: any): Observable<any> {
    return this.http.post(apiUrl + `resetdetail`, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public api_restPassword(data: any): Observable<any> {
    return this.http.post(apiUrl + `rest/password`, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public api_getUserTeam(uid: any): Observable<any> {
    return this.http.get(apiUrl + `userteam/${uid}`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public api_getfollowstatu(data: any, uid: any): Observable<any> {
    return this.http.post(apiUrl + `followstatu/${uid}`, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public api_getfollowrequest(data: any): Observable<any> {
    return this.http.post(apiUrl + `follow/request`, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public api_getuserFriend(uid: any): Observable<any> {
    return this.http.get(apiUrl + `userfriend/${uid}`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public api_getUserFollowRequest(uid: any): Observable<any> {
    return this.http.get(apiUrl + `userfollowrequest/${uid}`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public api_followRequestUpdate(data: any): Observable<any> {
    return this.http.post(apiUrl + `followrequest/update`, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public api_getUserFollowPendingRequest(uid: any): Observable<any> {
    return this.http.get(apiUrl + `userfollowpendingrequest/${uid}`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public api_getUserChats(uid: any): Observable<any> {
    return this.http.get(apiUrl + `userchats/${uid}`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public api_getChat(data: any): Observable<any> {
    return this.http.post(apiUrl + `getChat`, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public api_insertChat(data: any): Observable<any> {
    return this.http.post(apiUrl + `chat`, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public api_insertPost(data: any): Observable<any> {
    return this.http.post(apiUrl + `post`, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public api_getTeamPosts(uid: any, data: any): Observable<any> {
    return this.http.post(apiUrl + `getteamposts/${uid}`, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public api_getTeam(uid: any): Observable<any> {
    return this.http.get(apiUrl + `getteam/${uid}`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public api_postLike(data: any): Observable<any> {
    return this.http.post(apiUrl + `like`, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public api_postComments(data: any): Observable<any> {
    return this.http.post(apiUrl + `comment`, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public api_getPostComments(postid: any): Observable<any> {
    return this.http.get(apiUrl + `getpostcomment/${postid}`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  public api_postStatus(data: any): Observable<any> {
    return this.http.post(apiUrl + `status`, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  public api_createGroup(data: any): Observable<any> {
    return this.http.post(apiUrl + `group`, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  public api_addGroupMember(data: any): Observable<any> {
    return this.http.post(apiUrl + `groupmember`, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  public api_getUserGroup(uid: any): Observable<any> {
    return this.http.get(apiUrl + `getuserGroup/${uid}`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public api_getGroup(uid: any): Observable<any> {
    return this.http.get(apiUrl + `getGroup/${uid}`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public api_getTeamStatus(uid: any, data: any): Observable<any> {
    return this.http.post(apiUrl + `getteamStatus/${uid}`, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  public api_getUserPost(uid: any): Observable<any> {
    return this.http.get(apiUrl + `getuserpost/${uid}`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  public api_geUserStatus(uid: any): Observable<any> {
    return this.http.get(apiUrl + `getuserstatus/${uid}`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  public api_getActiveStatus(data: any): Observable<any> {
    return this.http.post(apiUrl + `getActivestatus`, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  public api_statusViews(data: any): Observable<any> {
    return this.http.post(apiUrl + `statusviews`, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  public api_getstatusView(status_id: any): Observable<any> {
    return this.http.get(apiUrl + `getstatusView/${status_id}`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public api_getallteam(): Observable<any> {
    return this.http.get(apiUrl + `getallteam`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public api_userUnfriend(data: any): Observable<any> {
    return this.http.post(apiUrl + `unfriend`, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  public api_getGroupChat(data: any): Observable<any> {
    return this.http.post(apiUrl + `getGroupChat`, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  public api_ggroupMessages(data: any): Observable<any> {
    return this.http.post(apiUrl + `groupmessages`, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  public api_getGroupMember(gid: any): Observable<any> {
    return this.http.get(apiUrl + `getGroupmember/${gid}`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  public api_updateGroup(data: any): Observable<any> {
    return this.http.post(apiUrl + `updategroup`, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public api_postDelete(data: any): Observable<any> {
    return this.http.post(apiUrl + `postdelete`, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public api_commentDelete(data: any): Observable<any> {
    return this.http.post(apiUrl + `commentdelete`, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  public api_updatePackage(data: any): Observable<any> {
    return this.http.post(apiUrl + `updatePackage`, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  public api_updateSocialOrder(data: any): Observable<any> {
    return this.http.post(apiUrl + `updateSocialOrder`, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  public api_getmyteam(uid: any): Observable<any> {
    return this.http.get(apiUrl + `myteam/${uid}`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  public api_addComplain(data: any): Observable<any> {
    return this.http.post(apiUrl + `complain`, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public api_getRandomData(): Observable<any> {
    return this.http.get(apiUrl + `Random`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public api_getcomplainusermessage(uid: any): Observable<any> {
    return this.http.get(apiUrl + `getcomplainusermessage/${uid}`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public api_getcomplainuserse(): Observable<any> {
    return this.http.get(apiUrl + `getcomplainusers`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getPackages(uid: any): Observable<any> {
    return this.http.get(apiUrl + `getPackages/${uid}`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public postpackage(data: any): Observable<any> {
    return this.http.post(apiUrl + `addpackage`, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public userteam(id: any): Observable<any> {
    return this.http.get(apiUrl + `userteam/${id}`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public orders(data: any): Observable<any> {
    return this.http.post(apiUrl + `orders`, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  public myorders(uid: any): Observable<any> {
    return this.http.get(apiUrl + `myorders/${uid}`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public Pendingorder(uid: any): Observable<any> {
    return this.http.get(apiUrl + `pendingorder/${uid}`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  public activatePackafe(user_id: any): Observable<any> {
    return this.http
      .post(apiUrl + `activatepackage`, { user_id: user_id })
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
  public adduserprofit(data: any): Observable<any> {
    return this.http.post(apiUrl + `adduserprofit`, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public userdailyprofit(uid: any): Observable<any> {
    return this.http.get(apiUrl + `userdailyprofit/${uid}`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public teamreport(uid: any, data: any): Observable<any> {
    return this.http.post(apiUrl + `teamreport/${data}`, uid).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public reward(data: any): Observable<any> {
    return this.http.post(apiUrl + `reward`, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getreward(): Observable<any> {
    return this.http.get(apiUrl + `getreward`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public rewadrequests(): Observable<any> {
    return this.http.get(apiUrl + `rewadrequests`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public rewardstatus(data: any): Observable<any> {
    return this.http.post(apiUrl + `rewardstatus/update`, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public approveReward(): Observable<any> {
    return this.http.get(apiUrl + `approveReward`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public userrewad(uid: any): Observable<any> {
    return this.http.get(apiUrl + `userrewadrequests/${uid}`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public mydailyprofit(uid:any): Observable<any> {
    return this.http.get(apiUrl + `mydailyprofit/${uid}`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
