import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SolicitudComponent} from './components/solicitud/solicitud.component';
import {RegistroComponent} from './components/usuarios/registro/registro.component';
import {LoginComponent} from './components/usuarios/login/login.component';
import {NopagefoundComponent} from './components/nopagefound/nopagefound.component';
import {UsuarioComponent} from './components/usuario.component';
import {AuthGuard} from './guards/auth.guard';
import {TicketComponent} from './components/ticket/ticket.component';
import {HomeComponent} from './components/home/home.component';
import {SolicitudesComponent} from './components/solicitudes/solicitudes.component';
import {IndexComponent} from './components/usuarios/index/index.component';
import { CategoriaComponent } from './components/configuracion/catalogo/categoria/categoria.component';
import { ConfiguracionComponent } from './components/configuracion/configuracion.component';
import { DepartamentoComponent } from './components/configuracion/lugar/departamento/departamento.component';
import { MunicipioComponent } from './components/configuracion/lugar/municipio/municipio.component';
import { CargoComponent } from './components/configuracion/parametros/cargo/cargo.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  { path: '',
    component: UsuarioComponent,
    children: [
      { path: 'cargo', component: CargoComponent },
      { path: 'departamento', component: DepartamentoComponent },
      { path: 'municipio', component: MunicipioComponent },
      { path: 'categoria', component: CategoriaComponent },
      { path: 'configuracion', component: ConfiguracionComponent,  },
      { path: 'dashboard', component: DashboardComponent,  },
      { path: 'solicitud', component: SolicitudComponent,  },
      { path: 'solicitudes', component: SolicitudesComponent,  },
      { path: 'registro', component: RegistroComponent },
      { path: 'ticket', component: TicketComponent },
      { path: 'home', component: HomeComponent },
      { path: 'listado', component: IndexComponent },
      { path: '', redirectTo: 'solicitud', pathMatch: 'full' },
    ],
    canActivate: [AuthGuard]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NopagefoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
