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
import { QRModalPage } from 'src/app/qrmodal/qrmodal.page';
import { ScanModalPage } from 'src/app/scan-modal/scan-modal.page';
import { PostModalPage } from 'src/app/post-modal/post-modal.page';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import {MatExpansionModule} from '@angular/material/expansion';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    QRModalPage,
    ScanModalPage,
    PostModalPage
  ],
  entryComponents: [
    QRModalPage,
    ScanModalPage,
    PostModalPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgxQRCodeModule,
<<<<<<< HEAD
    MatExpansionModule
=======
    FormsModule
>>>>>>> 558eac3a2510466622760781767c6c0c012100e2
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    BarcodeScanner,
    Base64ToGallery,
    AngularFirestore
  ],
  bootstrap: [
    AppComponent
  ]

})
export class AppModule {}

