import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from "@angular/forms";
import { InicioComponent } from './inicio/inicio.component';
import {RouterModule} from "@angular/router";
import {Mis_Rutas} from "./app.routes";
import {HttpClientModule} from "@angular/common/http";
import { NavBarMainComponent } from './nav-bar-main/nav-bar-main.component';
import { UserPerfilComponent } from './componentesUsuario/user-perfil/user-perfil.component';
import { ModeloHijoComponent } from './componentesHijos/modelo-hijo/modelo-hijo.component';
import { ModeloPapaComponent } from './componentesPapas/modelo-papa/modelo-papa.component';
import { ButonVisitarComponent } from './componentesUsuario/buton-visitar/buton-visitar.component';
import { ButonTransferirComponent } from './componentesHijos/buton-transferir/buton-transferir.component';
import { PeticionTransferenciaComponent } from './peticion-transferencia/peticion-transferencia.component';
import { SolicitudTransferenciaComponent } from './solicitud-transferencia/solicitud-transferencia.component';
import { PerfilDelUsuarioComponent } from './perfil-del-usuario/perfil-del-usuario.component';
import { ItemPeticionComponent } from './componentesSolicitud/item-peticion/item-peticion.component';
import { BtnAceptarComponent } from './componentesPerfil/btn-aceptar/btn-aceptar.component';
import { BtnRechazarComponent } from './componentesPerfil/btn-rechazar/btn-rechazar.component';
import {MasterURLService} from "./SERVICIOS/masterURL.service";
import {UsuarioService} from "./SERVICIOS/Usuario.Service";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    NavBarMainComponent,
    UserPerfilComponent,
    ModeloHijoComponent,
    ModeloPapaComponent,
    ButonVisitarComponent,
    ButonTransferirComponent,
    PeticionTransferenciaComponent,
    SolicitudTransferenciaComponent,
    PerfilDelUsuarioComponent,
    ItemPeticionComponent,
    BtnAceptarComponent,
    BtnRechazarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      Mis_Rutas,{useHash:true}
    )
  ],
  providers: [MasterURLService,UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
