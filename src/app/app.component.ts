import { Component } from '@angular/core';
import { StatusBar, Style } from '@capacitor/status-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Cashgrow';

  constructor() {
    StatusBar.setBackgroundColor({color:"ffffff"})
    this.setStatusBarStyleLight();
   }
  public loadScript(url: string) {
    let node = document.createElement('script');
    node.src = url;
    node.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(node);
  }
  setStatusBarStyleLight = async () => {
    await StatusBar.setStyle({ style: Style.Light });
  }
   showStatusBar = async () => {
    await StatusBar.show();
  };
}
