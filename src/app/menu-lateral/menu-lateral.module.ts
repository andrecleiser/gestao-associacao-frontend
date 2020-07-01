import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialButtonsModule } from '../shared/modules/material/material-buttons.module';
import { MenuLateralComponent } from './menu-lateral.component';



@NgModule({
  declarations: [
    MenuLateralComponent
  ],
  exports: [
    MenuLateralComponent
  ],
  imports: [
    CommonModule,
    MaterialButtonsModule
  ]
})
export class MenuLateralModule { }
