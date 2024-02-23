import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { VideoData } from './video'; 
import { ApicallService } from 'src/app/services/apicall.service';
import { check } from 'src/app/localStorage/LocalStorage';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/services/toast.service';

declare var YT: any;

@Component({
  selector: 'app-vedio-watching',
  templateUrl: './vedio-watching.component.html',
  styleUrls: ['./vedio-watching.component.scss']
})
export class VedioWatchingComponent implements OnInit {
  selectedSpeed: number = 1;
  player: any;
  videoCreated = false;
public shoeMessage : boolean = false;
public isPackageActiveted : boolean = true;
  constructor(private http: HttpClient, public apicall : ApicallService, private route : Router, private  toast : ToastService) {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';

    const firstScriptTag = document.querySelector('script');

    if (firstScriptTag && firstScriptTag.parentNode) {
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    } else {
      console.error('Script tag not found in the document.');
    }
    this.getUserDailyWatchedVideo()
  }

  async ngOnInit() {
    const user : any = await check("user");
    const userData = JSON.parse(user)
    console.log(userData)
    this.apicall.checkpackage(userData.id).subscribe(res=>{
      console.log(res)
      if(res.error == false) {
      this.isPackageActiveted = false
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';

    const firstScriptTag = document.querySelector('script');

    if (firstScriptTag && firstScriptTag.parentNode) {
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    } else {
      console.error('Script tag not found in the document.');
    }
    this.getUserDailyWatchedVideo()
  }
    else {
      console.log(res);
      this.isPackageActiveted = true
      }
      })
  }
    // (window as any)['onYouTubeIframeAPIReady'] = () => {
    //   this.getUserDailyWatchedVideo()
    //   // this.getVideo();
    // };
  

  

  async getUserDailyWatchedVideo() {
    const user : any = await check("user");
    const userData = JSON.parse(user)
    console.log(userData)
     this.apicall.getUserDailyWatch(userData.id).subscribe(todayWatched=>{
      console.log(todayWatched)
      if(todayWatched <= 10) {
          this.getVideo();
          this.shoeMessage = false;
          console.log(this.shoeMessage)
      }
      else{
        this.shoeMessage = true;
        console.log(this.shoeMessage)
        console.log("To Day Watch limit full")
      }
    })
  }
   getVideo() {
     this.apicall.getVideos().subscribe(video=>{
      console.log(video);
      this.createPlayer(video);
    })
  }



  createPlayer(videoUrl:any) {
    this.getVideoIdFromUrl(videoUrl.url).subscribe(videoId => {
      this.player = new YT.Player('player-container', {
        height: '360',
        width: '640',
        videoId: videoId,
        playerVars: {
          'autoplay': 0,
          'controls': 0,
          'modestbranding': 1,  
          'rel': 0,
          'showinfo': 0,
          'fs': 0,
          // 'start': 0,
          // 'end': 25,
        },
        events: {
          'onReady': (event: any) => {
            console.log(event.target)
            event.target.setPlaybackRate(this.selectedSpeed);
          },
          'onStateChange':(event: any) => {
            this.onStateChange(event, videoUrl.vid);
          } 
        },
      });
    });
  }
  
  onStateChange(event: any, videoId: number) {
    console.log(event.data)
    const playerState = event.data;
  
    switch (playerState) {
      case YT.PlayerState.PLAYING:
        console.log('Video is playing');
        console.log("Total video time", this.player.getDuration())
        this.showPlayingTime(videoId);
        break;
      case YT.PlayerState.PAUSED:
        console.log('Video is paused');
        this.stopVideo();
        break;
      case YT.PlayerState.ENDED:
        console.log('Video has ended');
        break;
    }
  }
  showPlayingTime(videoId:number) {
    if (this.player) {
      const interval = setInterval(async () => {
        const currentTime = this.player.getCurrentTime();
        console.log('Current playing time: ' + currentTime.toFixed(0) + ' seconds');
          if(currentTime.toFixed(0) == 99) {
            console.log(currentTime.toFixed(0), "Time limit FUll");
            const user : any = await check("user");
            const userData = JSON.parse(user)
            console.log(userData)
            const videoData = {user_id: userData.id, vid: videoId}
            this.apicall.addWatchVideo(videoData).subscribe(res=>{
              console.log(res)
              // if(res.error == false) {
              //   this.stopVideo();
              //   clearInterval(interval);
              //   this.toast.SuccessToast("You earned PKR. 0.30", "Congratulation!")
              //   this.route.navigate(['/default/index']);
              // }
            })
            const earningData = {user_id: userData.id, amount: 0.5}
            this.apicall.watchearning(earningData).subscribe(res=>{
                  console.log(res)
            })
            
          }

  
        if (this.player.getPlayerState() !== YT.PlayerState.PLAYING) {
          clearInterval(interval);
        }
      }, 1000);
    }
  }
  stopVideo() {
    if (this.player) {
      this.player.stopVideo();
    }
  }
  
  getVideoIdFromUrl(videoUrl: string) {
    const apiUrl = `https://www.googleapis.com/youtube/v3/videos?part=id&id=${this.extractVideoId(videoUrl)}&key=AIzaSyBCpm_G9nfr_F54hCYpHqmSprWdzjKy5Sk`;

    return this.http.get<VideoData>(apiUrl).pipe(
      map(data => data.items[0].id)
    );
  }

  extractVideoId(videoUrl: string): string {
    console.log(videoUrl)
    const regExp = /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^?&]+)/;
    const match = videoUrl.match(regExp);
    console.log(match)
    if (match && match[1]) {
      return match[1];
    } else {
      return '';
    }
  }
  
}
