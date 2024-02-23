import { Component } from '@angular/core';

@Component({
  selector: 'app-defaultlayout',
  templateUrl: './defaultlayout.component.html',
  styleUrls: ['./defaultlayout.component.scss']
})
export class DefaultlayoutComponent {
  
  public headerPath:string = 'Dashboard';

  constructor() { }
  public loadScript(url: string) {
    let node = document.createElement('script');
    node.src = url;
    node.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(node);
  }
  isSidebarVisible = false;

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }
  public getSideMenu(event:any) {
    console.log(event.label)
    this.headerPath = event.label
  }
}
