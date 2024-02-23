import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { check } from 'src/app/localStorage/LocalStorage';
import { ApicallService } from 'src/app/services/apicall.service';

@Component({
  selector: 'app-mynetwork',
  templateUrl: './mynetwork.component.html',
  styleUrls: ['./mynetwork.component.scss'],
})
export class MynetworkComponent implements OnInit{
  // @ViewChild('count1') count1Element: ElementRef | undefined;
  // @ViewChild('count2') count2Element: ElementRef | undefined;
  public userdata: any = [];
  public userobj: any = {};
  public user: any;
  public subtotal: any;
  constructor(private apiCall: ApicallService) {
    this.NewUserdata();
   
  }
  ngOnInit(): void {

  }
  ngAfterViewInit() {
    // this.startCounter(this.count1Element?.nativeElement, 0, this.userdata.length, 3000);
    // this.startCounter(this.count2Element?.nativeElement, 100, this.subtotal, 2500);
  }
  // startCounter(element: HTMLElement, start: number, end: number, duration: number) {
  //   const range = end - start;
  //   const increment = end > start ? 1 : -1;
  //   const step = Math.abs(Math.floor(duration / range));
  //   let current = start;

  //   const timer = setInterval(() => {
  //     current += increment;
  //     element.textContent = current.toString();

  //     if (current === end) {
  //       clearInterval(timer);
  //     }
  //   }, step);
  // }

  public async NewUserdata() {
    this.user = await check('user');
    this.userobj = JSON.parse(this.user);
    this.apiCall.getuserBysponserId(this.userobj.username).subscribe((res) => {
      this.userdata = res;
      const sumWithInitial = this.userdata.reduce(
        (accumulator: any, currentValue: any) =>
          accumulator + currentValue.subtotal,
        0
      );
      this.subtotal = sumWithInitial;
      console.log(this.subtotal);

      console.log(this.userdata);
      // this.startCounter(this.count1Element?.nativeElement, 0, this.userdata.length, 3000);
      // this.startCounter(this.count2Element?.nativeElement, 100, this.subtotal, 2500);
    });
  }
}
