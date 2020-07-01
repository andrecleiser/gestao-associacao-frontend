import { CapturaImagemBrowserModule } from './../../../captura-imagem-browser/captura-imagem-browser.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FotoAssociadoModule } from '../foto-associado/foto-associado.module';
import { MaterialButtonsModule } from '../../../shared/modules/material/material-buttons.module';
import { MaterialLayoutModule } from '../../../shared/modules/material/material-layout.module';
import { MaterialPopupModalModule } from './../../../shared/Validators/material-popup-modal.module';
import { DetalheAssociadoComponent } from './detalhe-associado.component';

@NgModule({
    imports: [
        CommonModule,
        MaterialLayoutModule,
        MaterialButtonsModule,
        MaterialPopupModalModule,
        FotoAssociadoModule,
        CapturaImagemBrowserModule
    ],
    declarations: [DetalheAssociadoComponent],
    exports: [DetalheAssociadoComponent]
})
export class DetalheComponentModule { }
