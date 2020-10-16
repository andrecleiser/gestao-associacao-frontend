import { MaterialButtonsModule } from './../shared/modules/material/material-buttons.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialLayoutModule } from '../shared/modules/material/material-layout.module';
import { MaterialFormControlsModule } from './../shared/modules/material/material-form-controls.module';
import { LoginComponent } from './login.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MaterialFormControlsModule,
        MaterialLayoutModule,
        MaterialButtonsModule
    ],
    exports: [LoginComponent],
    declarations: [LoginComponent]
})
export class LoginModule { }
