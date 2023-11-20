import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrgeneradoPageRoutingModule } from './qrgenerado-routing.module';

import { QrgeneradoPage } from './qrgenerado.page';
<<<<<<< HEAD
import { QRCodeModule} from 'angularx-qrcode';
=======
>>>>>>> 56fe6d99a70a39cc27d00aaa8f70bc45e7234d3a

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
<<<<<<< HEAD
    QRCodeModule,
=======
>>>>>>> 56fe6d99a70a39cc27d00aaa8f70bc45e7234d3a
    QrgeneradoPageRoutingModule
  ],
  declarations: [QrgeneradoPage]
})
export class QrgeneradoPageModule {}
