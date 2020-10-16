import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuLateralModule } from './../../../menu-lateral/menu-lateral.module';
import { MaterialNavigationModule } from './../../../shared/modules/material/material-navigation.module';
import { FormAssociadoModule } from './../form-associado/form-associado.module';
import { ListaAssociadoModule } from './../lista-associado/lista-associado.module';
import { AssociadoMenuComponent } from './associado-menu.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MenuLateralModule,
        MaterialNavigationModule,
        FormAssociadoModule,
        ListaAssociadoModule
    ],
    declarations: [AssociadoMenuComponent],
    exports: [AssociadoMenuComponent],
    providers: [],
})
export class AssociadoMenuModule { }
