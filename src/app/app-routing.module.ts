import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { UbicanosComponent } from './componentes/ubicanos/ubicanos.component';
import { ContactanosComponent } from './componentes/contactanos/contactanos.component';
import { SolicitudesContactosComponent } from './componentes/solicitudes-contactos/solicitudes-contactos.component';
import { InformacionProfesionalesComponent } from './componentes/informacion-profesionales/informacion-profesionales.component';
import { CrearProfesionalComponent } from './componentes/crear-profesional/crear-profesional.component';

const routes: Routes = [
  {path: "", component: InicioComponent},
  {path: "ubicanos", component: UbicanosComponent},
  {path: "contactanos", component: ContactanosComponent},
  {path: "solicitud-contacto", component: SolicitudesContactosComponent},
  {path: "informacion-profecionales", component: InformacionProfesionalesComponent},
  {path: "crear-profesional", component: CrearProfesionalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
