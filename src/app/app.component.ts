import { Component, OnInit} from '@angular/core';
import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';


// app.component.html //
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit  {

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private navController: NavController,
  
  ) {
    this.initializeApp();
  }

  ngOnInit() {
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.navController.navigateRoot('/login');
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
