import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { UsuarioNuevo } from '../interfaces/interfaces';
import { Router } from '@angular/router';
import { ApiCrudService } from 'src/app/servicios/api-crud.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  newUsuario: UsuarioNuevo={
    username: "",
    password: "",
    rut: "",
    role: "",
    correo: "",
    isactive: true,
    clases: [
      {
        nombre:"",
        año: 0,
        semestre: "",
        horasSemanales: ""
      }
    ]
  }
  /*usuario = {
    nombre: '',
    rut: '',
    email: '',
    contrasena: '',
    rol: '',
  }*/

  constructor(private alertController: AlertController, private apiCrud: ApiCrudService, private router: Router) { }

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

  registro(){
    this.apiCrud.RegistroUsuario(this.newUsuario).subscribe();
    this.router.navigateByUrl("/inicio");
  }

  /*enviar(){
    this.mostrarMensaje();
    this.usuario.nombre = '';
    this.usuario.rut = '';
    this.usuario.email = '';
    this.usuario.contrasena = '';
    this.usuario.rol = '';
  }*/

}
