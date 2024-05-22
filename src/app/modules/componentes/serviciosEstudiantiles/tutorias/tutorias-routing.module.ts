import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RiesgoAdacemicoComponent } from './riesgo-adacemico/riesgo-adacemico.component';
//import { ComponenteSecundario } from './riesgo-adacemico/componente-secundario.component';
const routes: Routes = [
  {
    path: '',
    component: RiesgoAdacemicoComponent,
  },
  /* Supongamos que hay un componente segundario de RiesgoAdacemicoComponent
  {
    path: 'componente-secundario', <--Proporcionamos su ruta
    component: ComponenteSecundario, <-- Importamos el componente hasta arriba con import y hacemos la referencia a el 
  },
  */
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutoriasRoutingModule { }
