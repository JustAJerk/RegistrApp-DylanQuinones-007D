import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
import { ReactiveFormsModule} from '@angular/forms';
=======
>>>>>>> 56fe6d99a70a39cc27d00aaa8f70bc45e7234d3a

import { IonicModule } from '@ionic/angular';

import { RegistroPageRoutingModule } from './registro-routing.module';

import { RegistroPage } from './registro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
<<<<<<< HEAD
    ReactiveFormsModule,
=======
>>>>>>> 56fe6d99a70a39cc27d00aaa8f70bc45e7234d3a
    IonicModule,
    RegistroPageRoutingModule
  ],
  declarations: [RegistroPage]
})
export class RegistroPageModule {}
