import { Component, OnInit } from '@angular/core';
import { ApiCrudService } from 'src/app/servicios/api-crud.service';
import { Clases } from '../interfaces/interfaces';
<<<<<<< HEAD
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/servicios/auth.service';
=======
import { Router } from '@angular/router';
>>>>>>> 56fe6d99a70a39cc27d00aaa8f70bc45e7234d3a

@Component({
  selector: 'app-periodoacademico',
  templateUrl: './periodoacademico.page.html',
  styleUrls: ['./periodoacademico.page.scss'],
})
export class PeriodoacademicoPage implements OnInit {

  usuario = {
<<<<<<< HEAD
    id:0
  }

  usuarioNombre:any;

  clases:Clases[]=[]

  constructor(private userService: ApiCrudService, private router: Router, private loadingCtrl : LoadingController, private auth:AuthService) {}

  ionViewWillEnter(){
    this.getUserById(this.getIdFromUrl());
    this.loadClases();
=======
    id:0,
    clases: [
      {
        nombre: "",
        año: 0,
        semestre: "",
        horasSemanales: ""
      }
    ]
  }

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
      (resp:any)=>{      
        this.usuario={
          id: resp[0].id
=======
    this.userService.BuscarUserId(userID).subscribe(
      (resp:any)=>{      
        this.usuario={
          id: resp[0].id,
          clases: [
            {
              nombre: resp[0].nombre,
              año: resp[0].año,
              semestre: resp[0].semestre,
              horasSemanales: resp[0].horasSemanales
            }
          ] 
>>>>>>> 56fe6d99a70a39cc27d00aaa8f70bc45e7234d3a
        }
      }
    )
  }

<<<<<<< HEAD
  async loadClases(event?: InfiniteScrollCustomEvent){
    const loading = await this.loadingCtrl.create({
      message: "Cargando..",
      spinner: "bubbles"
    });
    await loading.present();
    
    this.userService.ListarClases().subscribe(
      {
        next: resp =>{
          console.log(resp);
          loading.dismiss();

          let listString = JSON.stringify(resp);
          this.clases = JSON.parse(listString);

          this.clases = this.clases.filter(clases => clases.docente === this.usuarioNombre);

          event?.target.complete();
          console.log(this.clases);
        },
        error:err =>{
          console.log(err.error.message);
          loading.dismiss();
        }
      }
    )
  }

  irClaseEspecifica(){
    this.router.navigateByUrl("/qrgenerado/" + this.clases[0].codigo);
  }

  irClases(){
    this.router.navigateByUrl("/crearclase/" + sessionStorage.getItem('id'));
  }

  ngOnInit() {
    this.usuarioNombre = sessionStorage.getItem('username');
=======
  ngOnInit() {
>>>>>>> 56fe6d99a70a39cc27d00aaa8f70bc45e7234d3a
  }

}
