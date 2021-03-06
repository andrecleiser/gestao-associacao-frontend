import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutorizadoGuard } from '../shared/guard/autorizado.guard';
import { AssociadoResolver } from './associado.resolver';
import { AssociadoMenuComponent } from './components/associado-menu/associado-menu.component';
import { FormAssociadoComponent } from './components/form-associado/form-associado.component';
import { ListaAssociadoComponent } from './components/lista-associado/lista-associado.component';

const routes: Routes = [
  {
    path: '',
    component: AssociadoMenuComponent,
    canActivate: [AutorizadoGuard],
    canActivateChild: [AutorizadoGuard],
    children: [
      { path: 'listar-associados', component: ListaAssociadoComponent },
      { path: 'form-associado/:idAssociado', component: FormAssociadoComponent, resolve: { associado: AssociadoResolver } },
      {
        path: 'form-associado',
        component: FormAssociadoComponent,
        data: {
          associado: {
            nome: '',
            dataNascimento: Date.now,
            nacionalidade: '',
            nomeMae: '',
            nomePai: '',
            morada: '',
            concelho: '',
            distrito: '',
            telemovel: '',
            ddi: '',
            codigoPostal: '',
            email: '',
          }
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssociadoRoutingModule { }
