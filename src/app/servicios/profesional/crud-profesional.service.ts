import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CrudProfesionalService {
  backend = environment.backend+"/profesional"
  constructor( private http: HttpClient) { }

  registrarProfesional(solicitud_formulario:any){
    return this.http.post(`${this.backend}/crear-profesional`,{solicitud_formulario});
  }
  obtenerTodosProfesionales(){
    return this.http.get(`${this.backend}/obtener-profesionales`);
  }
}
