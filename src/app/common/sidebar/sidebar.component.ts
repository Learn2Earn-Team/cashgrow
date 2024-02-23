import { Component, EventEmitter, OnInit, Output, Renderer2 } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { adminMenuItems, menuItems } from './const/side-menu.const'
import { check } from 'src/app/localStorage/LocalStorage';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Output() public sideMenu = new EventEmitter<string>;
  public sideMenuItems:any[] = [];
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private renderer: Renderer2,
    private auth: AuthService,
    // private commonService: CommonService,
    // private authServe: AuthService,
    // private loaderService: LoaderService
  ) {

    this.getUserData();

   }
  ngOnInit() {
    this.getUserData();
  }

   async getUserData() {
    const user : any = await check("user");
    const userData = JSON.parse(user)
    console.log(userData)
    if(userData.username == 'google') {
      this.sideMenuItems = adminMenuItems;
    }
    else{
      this.sideMenuItems = menuItems;
    }
   }


   showData = false;

   goToNext(path:any) {
    console.log(path)
    if(path == '/login') {
      this.auth.logout();
    }
   }
   
  toggleData() {
    this.showData = !this.showData;
  }
  isActive: boolean = false;

  Active() {
    this.isActive = !this.isActive;
  }
   public loadScript(url: string) {
    let node = document.createElement('script');
    node.src = url;
    node.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(node);
  }

  keepDropdownOpen(event: Event): void {
    event.stopPropagation();
  } 
  public emitSideMenu(path:string) :void {
    this.sideMenu.emit(path)
  }
}