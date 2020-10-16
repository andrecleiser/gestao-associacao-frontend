import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AssociadoRoutingModule } from './associado-routing.module';
import { AssociadoResolver } from './associado.resolver';
import { AssociadoMenuModule } from './components/associado-menu/associado-menu.module';
import { AssociadoService } from './service/associado.service';

@NgModule({
  imports: [
    CommonModule,
    AssociadoMenuModule,
    AssociadoRoutingModule
  ],
  providers: [
    AssociadoService,
    AssociadoResolver
  ]
})

export class AssociadoModule { }
