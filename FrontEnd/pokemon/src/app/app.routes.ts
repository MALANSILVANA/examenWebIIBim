import {Routes} from "@angular/router";
import {InicioComponent} from "./inicio/inicio.component";
import {NavBarMainComponent} from "./nav-bar-main/nav-bar-main.component";
import {PeticionTransferenciaComponent} from "./peticion-transferencia/peticion-transferencia.component";
import {SolicitudTransferenciaComponent} from "./solicitud-transferencia/solicitud-transferencia.component";
import {PerfilDelUsuarioComponent} from "./perfil-del-usuario/perfil-del-usuario.component";

export const Mis_Rutas:Routes = [

  {
    component: PeticionTransferenciaComponent,
    path: 'peticion'
  },
  {
    component: PerfilDelUsuarioComponent,
    path: 'perfil'
  },
  {
    component: InicioComponent,
    path: 'busqueda'
  },
  {
    component: NavBarMainComponent,
    path:'main'
  },
  {
    component: SolicitudTransferenciaComponent,
    path: 'solicitud'
  },
  {
    path:'',
    redirectTo:'/busqueda',
    pathMatch: 'full'
  },
  {
    path:'**',
    component: InicioComponent
  }
];
