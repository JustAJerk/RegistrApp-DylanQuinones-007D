import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-iniciosesiondocente',
  templateUrl: './iniciosesiondocente.page.html',
  styleUrls: ['./iniciosesiondocente.page.scss'],
})
export class IniciosesiondocentePage implements OnInit {
  usuario = {
    rut: '',
    contrasena: ''
  }
  
  constructor() { }

  ngOnInit() {
  }

}
