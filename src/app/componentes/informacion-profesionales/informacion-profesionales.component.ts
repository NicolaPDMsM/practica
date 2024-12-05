import { Component } from '@angular/core';
import { CrudProfesionalService } from '../../servicios/profesional/crud-profesional.service';

@Component({
  selector: 'app-informacion-profesionales',
  templateUrl: './informacion-profesionales.component.html',
  styleUrl: './informacion-profesionales.component.css'
})
export class InformacionProfesionalesComponent {
  solicitudes_recibidas: any;
  constructor( private ProfesionalesSrv: CrudProfesionalService){}
  ngOnInit(){
    //console.log("Hola");
    //console.log(this.formularioForm);
    this.obtenerTodosProfesionales();
  }

  obtenerTodosProfesionales(){
    this.ProfesionalesSrv.obtenerTodosProfesionales().subscribe(
      (response:any) => {
        this.solicitudes_recibidas = response.solicitud_formulario
        console.log(this.solicitudes_recibidas);
      }, error => {
        console.log(error)
      }
    )
  }
}