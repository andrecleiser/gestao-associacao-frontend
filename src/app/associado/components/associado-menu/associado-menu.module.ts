import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MenuLateralModule } from './../../../menu-lateral/menu-lateral.module';
import { MaterialNavigationModule } from './../../../shared/modules/material/material-navigation.module';
import { AssociadoRoutingModule } from './../../associado-routing.module';
import { FormAssociadoModule } from './../form-associado/form-associado.module';
import { ListaAssociadoModule } from './../lista-associado/lista-associado.module';
import { AssociadoMenuComponent } from './associado-menu.component';

@NgModule({
    imports: [
        CommonModule,
        MenuLateralModule,
        MaterialNavigationModule,
        FormAssociadoModule,
        ListaAssociadoModule,
        AssociadoRoutingModule
    ],
    declarations: [AssociadoMenuComponent],
    exports: [AssociadoMenuComponent],
    providers: [],
})
export class AssociadoMenuModule { }
