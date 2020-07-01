import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialFormControlsModule } from '../../../shared/modules/material/material-form-controls.module';
import { FotoAssociadoComponent } from './foto-associado.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [FotoAssociadoComponent],
    exports: [FotoAssociadoComponent]
})
export class FotoAssociadoModule { }
