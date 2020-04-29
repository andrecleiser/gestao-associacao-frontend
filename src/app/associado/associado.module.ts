import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AssociadoRoutingModule } from './associado-routing.module';
import { AssociadoResolver } from './associado.resolver';
import { FormAssociadoModule } from './components/form-associado/form-associado.module';
import { ListaAssociadoModule } from './components/lista-associado/lista-associado.module';
import { AssociadoService } from './service/associado.service';


@NgModule({
  imports: [
    CommonModule,
    FormAssociadoModule,
    ListaAssociadoModule,
    AssociadoRoutingModule,
    HttpClientModule
  ],
  exports: [ListaAssociadoModule],
  providers: [
    AssociadoService,
    AssociadoResolver
  ]
})

export class AssociadoModule { }
