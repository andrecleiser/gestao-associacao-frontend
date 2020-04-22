import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FotoAssociadoModule } from '../foto-associado/foto-associado.module';
import { MaterialButtonsModule } from './../../../shared/material-buttons.module';
import { MaterialLayoutModule } from './../../../shared/material-layout.module';
import { MaterialPopupModalModule } from './../../../shared/Validators/material-popup-modal.module';
import { DetalheAssociadoComponent } from './detalhe-associado.component';

@NgModule({
    imports: [
        CommonModule,
        MaterialLayoutModule,
        MaterialButtonsModule,
        MaterialPopupModalModule,
        FotoAssociadoModule
    ],
    declarations: [DetalheAssociadoComponent],
    exports: [DetalheAssociadoComponent]
})
export class DetalheComponentModule { }
