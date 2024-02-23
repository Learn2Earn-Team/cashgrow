import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbCarousel, NgbModal, NgbSlideEvent } from '@ng-bootstrap/ng-bootstrap';
import { check } from 'src/app/localStorage/LocalStorage';
import { ApicallService } from 'src/app/services/apicall.service';
import { ToastService } from 'src/app/services/toast.service';
import { ngxLoadingAnimationTypes } from 'ngx-loading';
@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.scss']
})
export class ViewPostComponent implements OnInit, AfterViewInit{
  @ViewChild('carousel') carousel?: NgbCarousel; // Access the NgbCarousel instance

  loading = false;

  public ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  public userPost: any;
  userFriends: any;
public commentsdData: any = {username:'', text:'', postid:''}
  allComments: any;
  userData: any;
  allStatus: any = [];
  private scrollInterval: any;
  private executed: boolean = false;
  userStatus: any;
  userPersonalData: any;
 public currentIndex = 0;

  public currentData : any = {caption:'', expireDate:'', image:'', startDate:'', status_id:''}
 public userViewedStatus: any = [];
    constructor(private apicall : ApicallService, private toast : ToastService, 
      private modalService: NgbModal ,
      private route : Router,
      ) {}
  ngAfterViewInit(): void {
    const statusSlide = document.querySelector('swiper-container');
    if(statusSlide){
      Object.assign(statusSlide, this.mySlideOptions)
    }
    this.setTimeInterval();
  }

  setTimeInterval() {
    if (!this.executed) {
      this.scrollInterval =  setTimeout(() => {
        const statusSlide = document.querySelector('swiper-container');
        if(statusSlide){
          Object.assign(statusSlide, this.mySlideOptions)
        }
          this.executed = true;
        }, 500); 
        console.log(this.scrollInterval)
      }
  }
      public mySlideOptions = {
        slidesPerView: 2.5, // change of that property works fine
        spaceBetween: 20,
        navigator: false,
        paginationClickable: true,
        breakpoints: {
            1024: {
                slidesPerView: 5, // these don't work
                spaceBetween: 40
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 30
            },
            640: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            320: {
                slidesPerView: 2.5,
                spaceBetween: 10
            },
            280: {
                slidesPerView: 1.5,
                spaceBetween: 5
            }
        }
    }; 


      
      openScrollableContent(longContent: any, post_id:number) {
        this.commentsdData.postid = post_id;
        this.getPostComments(post_id);
        this.modalService.open(longContent, { scrollable: true });
      }

 ngOnInit(): void {
    this.getUserTeamAndPost();
    this.getuserFriend();
    this.getTeamStatus();
  }

  getPostComments(post_id:number) {
    this.apicall.api_getPostComments(post_id).subscribe(comments=>{
      console.log(comments)
      this.allComments = comments;
    })
  }

  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          // this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  openstory(story: any, data: any) {
    console.log(data)
    this.userPersonalData = data;
    this.loading = true;
    this.apicall.api_geUserStatus(data.uid).subscribe(res => {
      this.apicall.api_getActiveStatus(res).subscribe(async status => {
        this.userStatus = status.Data;
        this.currentData =  this.userStatus[0];
        console.log(this.currentData)
        this.loading = false;
        this.openCarouselModal(story);
        const user: any = await check('user');
        const userData = JSON.parse(user);
        console.log(userData);
        const userView  = {username: userData.username, status_id:this.currentData.status_id}
        this.apicall.api_statusViews(userView).subscribe(res=>{
          console.log(res)
        })
      });
    });
  }

   openCarouselModal(story: any) {
    this.modalService.open(story, { ariaLabelledBy: 'modal-basic-title' ,scrollable: true }).result.then(
      (result) => {
        // Handle modal close result if needed
      },
      (reason) => {
        // Handle modal dismiss reason if needed
      }
    );


  }


  async showNext() {
    const user: any = await check('user');
    const userData = JSON.parse(user);
    console.log(userData);
    this.currentIndex = (this.currentIndex + 1) % this.userStatus.length;
    console.log(this.currentIndex)
    this.currentData =  this.userStatus[this.currentIndex];
    console.log(this.currentData)
    const userView  = {username: userData.username, status_id:this.currentData.status_id}
    this.apicall.api_statusViews(userView).subscribe(res=>{
      console.log(res)
    })
  }

  showPrevious() {
    this.currentIndex = (this.currentIndex - 1 + this.userStatus.length) % this.userStatus.length;
    console.log(this.currentIndex)
    this.currentData =  this.userStatus[this.currentIndex];
    console.log(this.currentData)
  }

  openScrollable(view: any, status_id:number) {
    this.apicall.api_getstatusView(status_id).subscribe(views=>{
      console.log(views)
      this.userViewedStatus = views;
      this.modalService.open(view, { scrollable: true });
    })

  }


  //  openstory(story: any, data:any) {
  //   this.userPersonalData = data;
  //   this.loading = true;
  //   this.apicall.api_geUserStatus(data.uid).subscribe(res=>{
  //     console.log(res)
  //     this.apicall.api_getActiveStatus(res).subscribe(status=>{
  //       console.log(status)
  //       this.userStatus = status.Data;
  //       this.loading = false;
  //       this.modalService
  //       .open(story, { ariaLabelledBy: 'modal-basic-title' })
  //       .result.then(
  //         (result) => {
  //           // this.closeResult = `Closed with: ${result}`;
  //         },
  //         (reason) => {
  //           // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //         }
  //       );
  //     })
  //   })

  // }

    async getUserTeamAndPost() {
      this.loading = true;
      const user: any = await check('user');
      const userData = JSON.parse(user);
      console.log(userData);
      this.userData = userData;
     await this.apicall.api_getallteam().subscribe(async teams=>{
        console.log(teams)
       await this.apicall.api_getTeamPosts(userData.username, teams).subscribe(posts=>{
          console.log(posts)
          this.userPost = posts;
          this.loading = false;
        })
      })
    }

    async likePost(post_id:any) {
      const user: any = await check('user');
      const userData = JSON.parse(user);
      console.log(userData);
      const x  = {username:userData.username, postid:post_id}
      this.apicall.api_postLike(x).subscribe(res=>{
        console.log(res)
        this.getUserTeamAndPost()
      })
    }


    async commentPost() {
      const user: any = await check('user');
      const userData = JSON.parse(user);
      console.log(userData);
      this.commentsdData.username = userData.username;
      console.log(this.commentsdData);
      this.apicall.api_postComments(this.commentsdData).subscribe(res=>{
        console.log(res)
        this.getPostComments(this.commentsdData.postid);
      })
      this.commentsdData = {username:userData.username, text:'', postid:this.commentsdData.postid}
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

    goTOChatBox(item:any) {
      console.log(item)
      this.route.navigate(['chatbox'], {state : {data:item}})
    }


    async getTeamStatus(){
      const user: any = await check('user');
      const userData = JSON.parse(user);
      console.log(userData);
      this.userData = userData;
     await this.apicall.api_getallteam().subscribe(async teams=>{
        console.log(teams)
        this.apicall.api_getTeamStatus(userData.username,teams).subscribe(status=>{
          console.log(status);
          this.allStatus = status;
        })
      })

    }


    deletePost(post_id:number) {
      if (confirm("Are you sure to delete this Post!") == true) {
        const deletePostId = {pid: post_id}
        this.apicall.api_postDelete(deletePostId).subscribe(res=>{
          console.log(res);
          this.getUserTeamAndPost();
        })
       }
       else {
        const cancel = "You canceled!";
          console.log(cancel)
        }
    }

    deleteComment(com_id:number) {
      if (confirm("Are you sure to delete this Comment!") == true) {
        const deleteCommentId = {cid: com_id}
        this.apicall.api_commentDelete(deleteCommentId).subscribe(res=>{
          console.log(res);
          this.getPostComments(this.commentsdData.postid);
          this.getUserTeamAndPost();
        })
       }
       else {
        const cancel = "You canceled!";
          console.log(cancel)
        }
    }


}
