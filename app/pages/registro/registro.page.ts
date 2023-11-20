import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { UsuarioNuevo } from '../interfaces/interfaces';
import { Router } from '@angular/router';
<<<<<<< HEAD
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/servicios/auth.service';
=======
import { ApiCrudService } from 'src/app/servicios/api-crud.service';
>>>>>>> 56fe6d99a70a39cc27d00aaa8f70bc45e7234d3a

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
<<<<<<< HEAD
    role: "",
    correo: "",
    isactive: true
  }
  registroForm: FormGroup;

  userdata:any;

  constructor(private alertController: AlertController, private auth:AuthService, private router: Router, private fBuilder: FormBuilder) {
    this.registroForm = this.fBuilder.group({ 
      'rut': new FormControl ("", [Validators.required, Validators.minLength(10)]),
      'username' : new FormControl ("", [Validators.required, Validators.minLength(3)]),
      'correo': new FormControl ("", Validators.required),
      'password': new FormControl("", [Validators.required, Validators.minLength(3)]),
      'role': new FormControl("", Validators.required)
    })
   }
=======
    role: "usuario",
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
>>>>>>> 56fe6d99a70a39cc27d00aaa8f70bc45e7234d3a

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

<<<<<<< HEAD
  registrarUsuario(){
    if (this.registroForm.valid){
      this.auth.GetUserById(this.registroForm.value.username).subscribe(resp=>{
        this.userdata = resp; 
        if(this.userdata.length>0){
          this.errorDuplicidad();
          this.registroForm.reset();
        }
        else{
          this.newUsuario.username = this.registroForm.value.username;
          this.newUsuario.password = this.registroForm.value.password;
          this.newUsuario.rut = this.registroForm.value.rut;
          this.newUsuario.role = this.registroForm.value.role;
          this.newUsuario.correo = this.registroForm.value.correo;
          this.newUsuario.isactive=true;
          this.auth.RegistroUsuario(this.newUsuario).subscribe();
          this.registroForm.reset();
          this.mostrarMensaje();
          this.router.navigateByUrl('/iniciosesiondocente');
        }
      })
    }
  }

  async errorDuplicidad(){
    const alerta = await this.alertController.create({
      header: 'Fallo al registrarse..',
      message: 'El usuario '+ this.newUsuario.username + ' ya existe!',
      buttons: ['OK']
    });
    alerta.present();
  }
=======
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
>>>>>>> 56fe6d99a70a39cc27d00aaa8f70bc45e7234d3a

}
