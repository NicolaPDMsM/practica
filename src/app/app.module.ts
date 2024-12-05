import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { UbicanosComponent } from './componentes/ubicanos/ubicanos.component';
import { ContactanosComponent } from './componentes/contactanos/contactanos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './componentes/footer/footer.component';
import { SolicitudesContactosComponent } from './componentes/solicitudes-contactos/solicitudes-contactos.component';

import { provideHttpClient } from '@angular/common/http';
import { InformacionProfesionalesComponent } from './componentes/informacion-profesionales/informacion-profesionales.component';
import { BarraNavComponent } from './componentes/barra-nav/barra-nav.component';
import { CrearProfesionalComponent } from './componentes/crear-profesional/crear-profesional.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    UbicanosComponent,
    ContactanosComponent,
    FooterComponent,
    SolicitudesContactosComponent,
    InformacionProfesionalesComponent,
    BarraNavComponent,
    CrearProfesionalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
