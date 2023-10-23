import { Component, OnInit } from '@angular/core';
import { ApiCrudService } from 'src/app/servicios/api-crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qrgenerado',
  templateUrl: './qrgenerado.page.html',
  styleUrls: ['./qrgenerado.page.scss'],
})
export class QrgeneradoPage implements OnInit {

  qr = {
    id:0,
    image:"",
  }

  constructor(private userService: ApiCrudService, private router: Router) { }

  getUserById(qrID:number){
    this.userService.BuscarQRId(qrID).subscribe(
      (resp:any)=>{      
        this.qr={
          id: resp[0].id,
          image: resp[0].image
        }
      }
    )
  }

  numeroAleatorio(min:number, max:number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  ngOnInit() {
    this.getUserById(this.numeroAleatorio(1,3));
  }

}
