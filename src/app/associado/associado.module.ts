import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AssociadoRoutingModule } from './associado-routing.module';
import { FormAssociadoModule } from './components/form-associado/form-associado.module';
import { ListaAssociadoModule } from './components/lista-associado/lista-associado.module';
import { AssociadoService } from './service/associado.service';


@NgModule({
  imports: [
    CommonModule,
    FormAssociadoModule,
    ListaAssociadoModule,
    AssociadoRoutingModule
  ],
  exports: [ListaAssociadoModule],
  providers: [AssociadoService]
})

export class AssociadoModule { }
