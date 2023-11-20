import { Component, OnInit } from '@angular/core';
import { ApiCrudService } from 'src/app/servicios/api-crud.service';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { Router } from '@angular/router';
<<<<<<< HEAD
import { AuthService } from 'src/app/servicios/auth.service';
=======
>>>>>>> 56fe6d99a70a39cc27d00aaa8f70bc45e7234d3a

@Component({
  selector: 'app-menudocente',
  templateUrl: './menudocente.page.html',
  styleUrls: ['./menudocente.page.scss'],
})
export class MenudocentePage implements OnInit {

<<<<<<< HEAD
  usuarioNombre:any;

  idPerson:any;

=======
>>>>>>> 56fe6d99a70a39cc27d00aaa8f70bc45e7234d3a
  usuarios = {
    id:0,
    username:"",
    password:"",
    rut:"",
    role:"",
    correo:"",
    isactive:"",
  }

<<<<<<< HEAD
  constructor(private userService: ApiCrudService, private router: Router, private auth:AuthService) { }
  
  ionViewWillEnter(){
    this.getUserById(this.getIdFromUrl());
    this.idPerson = sessionStorage.getItem('id');
=======
  constructor(private userService: ApiCrudService, private router: Router) { }
  
  ionViewWillEnter(){
    this.getUserById(this.getIdFromUrl());
>>>>>>> 56fe6d99a70a39cc27d00aaa8f70bc45e7234d3a
  }

  getIdFromUrl(){
    let url=this.router.url;
    let arr=url.split("/",3);
    let id = parseInt(arr[2]);
    return id;
  }

  getUserById(userID:number){
<<<<<<< HEAD
    this.auth.GetUserById(userID).subscribe(
=======
    this.userService.BuscarUserId(userID).subscribe(
>>>>>>> 56fe6d99a70a39cc27d00aaa8f70bc45e7234d3a
      (resp:any)=>{   
        this.usuarios={
          id: resp[0].id,
          username: resp[0].username,
          password: resp[0].password,
          rut: resp[0].rut,
          role: resp[0].role,
          correo: resp[0].correo,
          isactive: resp[0].isactive
        }
      }
    )
  }
<<<<<<< HEAD

  cerrarSesion(){
    sessionStorage.clear();
  }
  

  ngOnInit() {
    this.usuarioNombre = sessionStorage.getItem('username');
=======
  ngOnInit() {
>>>>>>> 56fe6d99a70a39cc27d00aaa8f70bc45e7234d3a
  }

}
