import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RegistroService } from '../../servicios/registro/registro.service';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrl: './contactanos.component.css'
})
export class ContactanosComponent {
  formularioForm;
  datos_formulario: any;
  constructor(private formBuild: FormBuilder, private SolicitudesContactosSrv: RegistroService){
    this.formularioForm = this.formBuild.group({
      nombre: '',
      apellido: '',
      correo: '',
      telefono: '',
      mensaje: ''
    });
  }
  enviarDatos(){
    this.datos_formulario = this.formularioForm.value;
    this.SolicitudesContactosSrv.registrarFormulario(this.datos_formulario).subscribe(
      (response:any) => {
        if(response.solicitud_formulario){
          alert("Datos duardados correctamente")
          console.log(response.solicitud_formulario);
          this.formularioForm.reset
        }
      },error => {
        console.log(error)
      }
    )
  }
}
