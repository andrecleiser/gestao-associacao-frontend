import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from './../service/auth/usuario.service';

@Injectable({providedIn: 'root'})
export class AutorizadoGuard implements CanActivateChild, CanActivate {
    constructor(
        private usuarioService: UsuarioService,
        private router: Router
    ) { }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot):
        boolean | Observable<boolean> | Promise<boolean> {
            if (!this.usuarioService.existeUsuarioLogado()) {
                this.router.navigate(['login']);
                return false;
            }
            return true;
    }

    canActivate(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot):
        boolean | Observable<boolean> | Promise<boolean> {
            if (!this.usuarioService.existeUsuarioLogado()) {
                this.router.navigate(['login']);
                return false;
            }
            return true;
    }
}
