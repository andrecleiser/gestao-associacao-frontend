import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialButtonsModule } from '../shared/modules/material/material-buttons.module';
import { MaterialLayoutModule } from '../shared/modules/material/material-layout.module';
import { CapturaImagemBrowserComponent } from './captura-imagem-browser.component';
import { CapturarImagemService } from './service/capturar-imagem.service';

@NgModule({
    imports: [
        CommonModule,
        MaterialLayoutModule,
        MaterialButtonsModule,
        MatDialogModule
    ],
    exports: [CapturaImagemBrowserComponent],
    declarations: [CapturaImagemBrowserComponent],
    providers: [CapturarImagemService],
})
export class CapturaImagemBrowserModule { }
