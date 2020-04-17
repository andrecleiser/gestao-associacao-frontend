import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialButtonsModule } from './../../../shared/material-buttons.module';
import { MaterialFormControlsModule } from './../../../shared/material-form-controls.module';
import { FormAssociadoComponent } from './form-associado.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MaterialFormControlsModule,
        MaterialButtonsModule
    ],
    exports: [FormAssociadoComponent],
    declarations: [FormAssociadoComponent]
})

export class FormAssociadoModule { }
