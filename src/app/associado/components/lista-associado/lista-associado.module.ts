import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialLayoutModule } from '../../../shared/modules/material/material-layout.module';
import { DetalheComponentModule } from '../detalhe-associado/detalhe-associado.module';
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
