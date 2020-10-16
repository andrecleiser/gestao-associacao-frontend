import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { WebcamModule } from 'ngx-webcam';
import { MaterialButtonsModule } from '../../../shared/modules/material/material-buttons.module';
import { MaterialLayoutModule } from '../../../shared/modules/material/material-layout.module';
import { FotoAssociadoModule } from '../foto-associado/foto-associado.module';
import { CapturaImagemBrowserModule } from './../../../captura-imagem-browser/captura-imagem-browser.module';
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
