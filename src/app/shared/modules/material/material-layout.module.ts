import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
    imports: [
        MatCardModule,
        MatDividerModule,
        MatTabsModule
    ],
    exports: [
        MatCardModule,
        MatDividerModule,
        MatTabsModule
    ]
})
export class MaterialLayoutModule { }
