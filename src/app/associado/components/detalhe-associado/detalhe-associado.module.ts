import { CommonModule } from '@angular/common';
import { MaterialLayoutModule } from './../../../shared/material-layout.module';
import { NgModule } from '@angular/core';
import { FotoAssociadoModule } from '../foto-associado/foto-associado.module';
import { DetalheAssociadoComponent } from './detalhe-associado.component';

@NgModule({
    imports: [
        CommonModule,
        MaterialLayoutModule,
        FotoAssociadoModule
    ],
    declarations: [DetalheAssociadoComponent],
    exports: [DetalheAssociadoComponent]
})
export class DetalheComponentModule { }
