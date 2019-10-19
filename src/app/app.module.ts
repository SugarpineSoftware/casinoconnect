import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';
import { AngularFirestore } from '../../node_modules/@angular/fire/firestore';
import { AngularFireModule } from '../../node_modules/@angular/fire';
import { AngularFireDatabaseModule } from '../../node_modules/@angular/fire/database';
import { AngularFireAuthModule } from '../../node_modules/@angular/fire/auth';
import { environment } from '../environments/environment';



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
  AngularFireModule.initializeApp(environment.firebase),
  AngularFireDatabaseModule,
  AngularFireAuthModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    BarcodeScanner,
    Base64ToGallery,
    AngularFirestore
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

