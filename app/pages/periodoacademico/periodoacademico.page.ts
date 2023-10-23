import { Component, OnInit } from '@angular/core';
import { ApiCrudService } from 'src/app/servicios/api-crud.service';
import { Clases } from '../interfaces/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-periodoacademico',
  templateUrl: './periodoacademico.page.html',
  styleUrls: ['./periodoacademico.page.scss'],
})
export class PeriodoacademicoPage implements OnInit {

  usuario = {
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
  }

  getIdFromUrl(){
    let url=this.router.url;
    let arr=url.split("/",3);
    let id = parseInt(arr[2]);
    return id;
  }

  getUserById(userID:number){
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
        }
      }
    )
  }

  ngOnInit() {
  }

}
