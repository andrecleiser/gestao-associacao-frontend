import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialNavigationModule } from '../shared/modules/material/material-navigation.module';
import { MaterialButtonsModule } from './../shared/modules/material/material-buttons.module';
import { HeaderComponent } from './header.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialNavigationModule,
    MaterialButtonsModule
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class HeaderModule { }
