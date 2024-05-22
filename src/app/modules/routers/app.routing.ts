import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from "../servicios/core/auth-guard.service";

//LOGIN
import { LoginComponent } from '../componentes/login/login.component';
import { HomeComponent } from '../componentes/home/home.component';

const routes: Routes = [
  { path: "", redirectTo: 'login', pathMatch: "full"},
  { path: "login", component: LoginComponent, pathMatch: "full"},
  { path: "inicio", component: HomeComponent, pathMatch: "full", canActivate:[AuthGuardService]}, //canActivate: [AuthGuardService] 
  
  /**
   *En el routing general solo deberás hacer referencia al modulo de tu carpeta, esta
   *ya tendra las rutas que definiste en el routing de tu componente y solo deberas 
   *agregarlo como esta abajo
   */
  {
    path: 'tutorias-riesgoAcademico',
    loadChildren: () => import('../componentes/serviciosEstudiantiles/tutorias/tutorias.module').then(m => m.TutoriasModule),
    canActivate: [AuthGuardService]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { };
