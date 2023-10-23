import { Component, OnInit } from '@angular/core';
import { ApiCrudService } from 'src/app/servicios/api-crud.service';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menudocente',
  templateUrl: './menudocente.page.html',
  styleUrls: ['./menudocente.page.scss'],
})
export class MenudocentePage implements OnInit {

  usuarios = {
    id:0,
    username:"",
    password:"",
    rut:"",
    role:"",
    correo:"",
    isactive:"",
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
  ngOnInit() {
  }

}
