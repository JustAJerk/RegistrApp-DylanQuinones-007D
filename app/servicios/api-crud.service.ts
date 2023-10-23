import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Users } from '../pages/interfaces/interfaces';
import { UsuarioNuevo } from '../pages/interfaces/interfaces';
import { CodigoQR } from '../pages/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiCrudService {

  constructor(private httpclient:HttpClient) { }

  RegistroUsuario(newUsuario: UsuarioNuevo): Observable<UsuarioNuevo>{
    return this.httpclient.post<Users>(`${environment.apiUrl}/usuarios`, newUsuario);
  }

  getUsuario():Observable<Users>{
    return this.httpclient.get<Users>(`${environment.apiUrl}/usuarios`);
  }

  BuscarUserId(id:number):Observable<Users>{
    return this.httpclient.get<Users>(`${environment.apiUrl}/usuarios/?id=${id}`);
  }

  BuscarQRId(id:number):Observable<CodigoQR>{
    return this.httpclient.get<CodigoQR>(`${environment.apiUrl}/codigosQR/?id=${id}`);
  }
}
