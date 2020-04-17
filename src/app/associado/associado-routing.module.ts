import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaAssociadoComponent } from './components/lista-associado/lista-associado.component';
import { FormAssociadoComponent } from './components/form-associado/form-associado.component';

const routes: Routes = [
  { path: 'lista-associados', component:  ListaAssociadoComponent },
  { path: 'form-associado', component: FormAssociadoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssociadoRoutingModule { }
