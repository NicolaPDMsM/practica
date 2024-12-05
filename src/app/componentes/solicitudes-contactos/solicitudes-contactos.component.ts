import { Component } from '@angular/core';
import { RegistroService } from '../../servicios/registro/registro.service';

@Component({
  selector: 'app-solicitudes-contactos',
  templateUrl: './solicitudes-contactos.component.html',
  styleUrl: './solicitudes-contactos.component.css'
})
export class SolicitudesContactosComponent {
  solicitudes_recibidas: any;
  constructor( private SolicitudesContactosSrv: RegistroService){}
  ngOnInit(){
    //console.log("Hola");
    //console.log(this.formularioForm);
    this.obtenerTodasSolicitudes();
  }
  
  obtenerTodasSolicitudes(){
    this.SolicitudesContactosSrv.obtenerTodasSolicitudes().subscribe(
      (response:any) => {
        this.solicitudes_recibidas = response.solicitud_formulario
        console.log(this.solicitudes_recibidas);
      }, error => {
        console.log(error)
      }
    )
  }
}