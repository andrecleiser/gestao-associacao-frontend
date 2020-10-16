import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatTooltipModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatTooltipModule
  ]
})
export class MaterialButtonsModule { }
