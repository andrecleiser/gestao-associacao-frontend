import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
    imports: [
        MatTooltipModule,
        MatDialogModule
    ],
    exports: [
        MatTooltipModule,
        MatDialogModule
    ]
})
export class MaterialPopupModalModule { }
