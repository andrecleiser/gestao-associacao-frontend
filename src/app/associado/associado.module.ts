import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AssociadoResolver } from './associado.resolver';
import { AssociadoMenuModule } from './components/associado-menu/associado-menu.module';
import { AssociadoService } from './service/associado.service';

@NgModule({
  imports: [
    CommonModule,
    AssociadoMenuModule,
    HttpClientModule
  ],
  exports: [AssociadoMenuModule],
  providers: [
    AssociadoService,
    AssociadoResolver
  ]
})

export class AssociadoModule { }
