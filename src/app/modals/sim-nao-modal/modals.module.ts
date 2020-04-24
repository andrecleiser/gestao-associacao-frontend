import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialButtonsModule } from './../../shared/material-buttons.module';
import { MaterialFormControlsModule } from './../../shared/material-form-controls.module';
import { MaterialLayoutModule } from './../../shared/material-layout.module';
import { MaterialPopupModalModule } from './../../shared/Validators/material-popup-modal.module';
import { SimNaoModalComponent } from './sim-nao.modal.component';

@NgModule({
    imports: [
        CommonModule,
        MaterialPopupModalModule,
        MaterialButtonsModule,
        MaterialFormControlsModule,
        MaterialLayoutModule
    ],
    declarations: [
        SimNaoModalComponent
    ],
    exports: [
        SimNaoModalComponent
    ]
})
export class ModalsModule { }
