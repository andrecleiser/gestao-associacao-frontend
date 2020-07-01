import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssociadoRoutingModule } from './associado/associado-routing.module';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'associado', redirectTo: 'associado-menu', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AssociadoRoutingModule
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
