import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalsModule } from './../../../modals/sim-nao-modal/modals.module';
import { MaterialButtonsModule } from '../../../shared/modules/material/material-buttons.module';
import { MaterialFormControlsModule } from '../../../shared/modules/material/material-form-controls.module';
import { MaterialPopupModalModule } from './../../../shared/Validators/material-popup-modal.module';
import { FormAssociadoComponent } from './form-associado.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MaterialFormControlsModule,
        MaterialPopupModalModule,
        MaterialButtonsModule,
        ModalsModule
    ],
    exports: [FormAssociadoComponent],
    declarations: [FormAssociadoComponent]
})

export class FormAssociadoModule { }
