import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DetalheComponentModule } from '../detalhe-associado/detalhe-associado.module';
import { MaterialLayoutModule } from './../../../shared/material-layout.module';
import { ListaAssociadoComponent } from './lista-associado.component';

@NgModule({
    imports: [
        CommonModule,
        MaterialLayoutModule,
        DetalheComponentModule
    ],
    declarations: [ListaAssociadoComponent],
    exports: [ListaAssociadoComponent]
})
export class ListaAssociadoModule { }
