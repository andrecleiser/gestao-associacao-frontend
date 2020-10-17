import { Router } from '@angular/router';
import { Token } from './../../models/auth/token.model';
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';
import { Usuario } from './../../models/auth/usuario.model';
import { TokenService } from './token.service';

@Injectable({ providedIn: 'root' })
export class UsuarioService {

    private usuario$ = new BehaviorSubject<Usuario>(undefined);

    constructor(
        private tokenService: TokenService,
        private router: Router
        ) {
        // Garante que será usado o cookie mesmo após fechar a janela do browse
        if (this.tokenService.existeToken()) {
            this.decodificarENotificarLoginUsuario();
        }
    }

    public registrarUsuario() {
        this.decodificarENotificarLoginUsuario();
    }

    private decodificarENotificarLoginUsuario() {
        const token: Token = jwt_decode<Token>(this.tokenService.obterToken());
        const usuario: Usuario = {
            idUsuario: token.idUsuario,
            nome: token.preferred_username,
            email: token.upn,
            perfis: token.groups
        };

        this.usuario$.next(usuario);
    }

    public existeUsuarioLogado(): boolean {
        return !!this.tokenService.existeToken();
    }

    public efetuarLogout(): void {
        this.usuario$.next(undefined);
        this.tokenService.limparTokenAcesso();
        this.router.navigate(['login']);
    }

    public obterUsuario$(): Observable<Usuario> {
        return this.usuario$.asObservable();
    }
}
