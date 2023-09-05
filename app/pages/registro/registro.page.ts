import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  usuario = {
    nombre: '',
    rut: '',
    email: '',
    contrasena: '',
    rol: '',
  }

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  async mostrarMensaje(){
    const alert = await this.alertController.create({
      header: 'Registro hecho con exito!',
      message: 'Su cuenta de RegistrApp ha sido creada exitosamente!',
      buttons: ['Aceptar']
    });
    await alert.present();
  }

  enviar(){
    this.mostrarMensaje();
    this.usuario.nombre = '';
    this.usuario.rut = '';
    this.usuario.email = '';
    this.usuario.contrasena = '';
    this.usuario.rol = '';
  }

}
