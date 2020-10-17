import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({providedIn: 'root'})
export class TokenService {
    public readonly NOME_COOKIE_TOKEN_ACESSO = 'tokenAcesso';

    constructor(private cookieService: CookieService) { }

    public existeToken(): boolean {
        return !!this.obterToken();
    }

    public obterToken(): string {
        return this.cookieService.get(this.NOME_COOKIE_TOKEN_ACESSO);
    }

    public limparTokenAcesso(): void {
        this.cookieService.delete(this.NOME_COOKIE_TOKEN_ACESSO, '/');
    }
}
