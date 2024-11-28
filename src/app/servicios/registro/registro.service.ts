import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  backend = environment.backend+"/solicitud-formulario"
  constructor( private http: HttpClient) { }

  registrarFormulario(solicitud_formulario:any){
    return this.http.post(`${this.backend}/crear-solicitud-formulario`,{solicitud_formulario});
  }
  obtenerTodasSolicitudes(){
    return this.http.get(`${this.backend}/obtener-solicitudes-formulario`);
  }
}
