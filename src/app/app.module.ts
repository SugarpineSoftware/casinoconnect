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
import { AngularFireStorageModule} from '../../node_modules/@angular/fire/storage';
import { environment } from '../environments/environment';
import { QRModalPage } from 'src/app/qrmodal/qrmodal.page';
import { ScanModalPage } from 'src/app/scan-modal/scan-modal.page';
import { PostModalPage } from 'src/app/post-modal/post-modal.page';
import { NewCommentPage } from 'src/app/new-comment/new-comment.page';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { SignUpPage } from 'src/app/sign-up/sign-up.page';
import { FormGroup, FormControl } from '@angular/forms';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    QRModalPage,
    ScanModalPage,
    PostModalPage,
    NewCommentPage,
    SignUpPage

  ],
  entryComponents: [
    QRModalPage,
    ScanModalPage,
    PostModalPage,
    NewCommentPage,
    SignUpPage
  ],

  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    NgxQRCodeModule,
    FormsModule,
    ReactiveFormsModule
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

