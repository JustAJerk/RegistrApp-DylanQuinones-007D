import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
<<<<<<< HEAD
import { CodigoQR } from '../pages/interfaces/interfaces';
import { Clases } from '../pages/interfaces/interfaces';
import { ClaseEspecifica } from '../pages/interfaces/interfaces';
import { QR } from '../pages/interfaces/interfaces';
=======
import { Users } from '../pages/interfaces/interfaces';
import { UsuarioNuevo } from '../pages/interfaces/interfaces';
import { CodigoQR } from '../pages/interfaces/interfaces';
>>>>>>> 56fe6d99a70a39cc27d00aaa8f70bc45e7234d3a

@Injectable({
  providedIn: 'root'
})
export class ApiCrudService {

  constructor(private httpclient:HttpClient) { }

<<<<<<< HEAD
  BuscarQRId(id:number):Observable<CodigoQR>{
    return this.httpclient.get<CodigoQR>(`${environment.apiUrl}/codigosQR/?id=${id}`);
  }

  ListarClases():Observable<Clases>{
    return this.httpclient.get<Clases>(`${environment.apiUrl}/clases`);
  }

  CrearClase(newClase: ClaseEspecifica): Observable<ClaseEspecifica>{
    return this.httpclient.post<Clases>(`${environment.apiUrl}/clases`, newClase);
  }

  CrearQR(newQR: QR): Observable<QR>{
    return this.httpclient.post<CodigoQR>(`${environment.apiUrl}/codigosQR`, newQR);
  }
=======
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
>>>>>>> 56fe6d99a70a39cc27d00aaa8f70bc45e7234d3a
}
