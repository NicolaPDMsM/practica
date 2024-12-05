import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CrudProfesionalService } from '../../servicios/profesional/crud-profesional.service';

@Component({
  selector: 'app-crear-profesional',
  templateUrl: './crear-profesional.component.html',
  styleUrl: './crear-profesional.component.css'
})
export class CrearProfesionalComponent {
  formularioForm;
  datos_formulario: any;
  constructor(private formBuild: FormBuilder, private RegistrarProfesionalSrv: CrudProfesionalService){
    this.formularioForm = this.formBuild.group({
      nombre: '',
      apellido: '',
      correo: '',
      profesión: '',
      telefono: ''
    });
  }
  enviarDatos(){
    this.datos_formulario = this.formularioForm.value;
    this.RegistrarProfesionalSrv.registrarProfesional(this.datos_formulario).subscribe(
      (response:any) => {
        console.log(response);
        if(response.solicitud_formulario){
          alert("Datos duardados correctamente")
          console.log(response.solicitud_formulario);
          this.formularioForm.reset();
        }
      },error => {
        console.log(error)
      }
    )
  }
}
