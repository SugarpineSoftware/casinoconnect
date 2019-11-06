import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { QrPopupPageModule } from 'src/app/qr-popup/qr-popup.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab2Page }]),
    NgxQRCodeModule
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
