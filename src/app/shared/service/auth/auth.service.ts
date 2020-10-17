import { TokenDto } from './../../models/auth/token-dto.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from './../../../../environments/environment';
import { UsuarioService } from './usuario.service';

@Injectable({ providedIn: 'root' })
export class AutenticacaoService {

  private readonly mensagemErroBackend = 'Erro ao contactar o servidor';

  constructor(
    private http: HttpClient,
    private usuarioService: UsuarioService
  ) { }

  public autenticar(usuario: string, senha: string): Observable<TokenDto> {
    const credenciaisSistema = `${environment.aplicacao.clienteId}:${environment.aplicacao.clienteSecrect}`;
    const auth = `Basic ${btoa(credenciaisSistema)}`;

    const headers = new HttpHeaders().set('Content-type', 'application/json').set('Authorization', auth);

    const credenciais = { usuario, senha };
    const uri = `${environment.endpoints.autenticao}/autenticacao`;

    return this.http
      .post<TokenDto>(uri, credenciais, { headers })
      .pipe(
        tap(token => console.log(token))
      );
  }

  public logout(): void {
    this.usuarioService.efetuarLogout();
  }

  // verificaSeOAccessTokenExpiraEmMenosDe(milesegundos: number): boolean {
  //   const identity = this.getIdentity();

  //   if (!identity) {
  //     return true;
  //   }

  //   const exp = new Date(identity.exp * 1000);
  //   const now = new Date();
  //   const subtraction = exp.getTime() - now.getTime();

  //   // Se tempo restante do Token for menor que os milesegundos
  //   return subtraction <= milesegundos;
  // }

  // hasRole(roles: string[], atualizar: boolean = false): boolean {
  //   if (!roles || !this.loggedIn()) {
  //     return false;
  //   }
  //   return roles.indexOf(this.getIdentity(atualizar).papel.identificador.toUpperCase()) !== -1;
  // }

  // renovarAccessToken(): Observable<boolean> {
  //   const refreshToken = this.getRefreshToken();
  //   if (refreshToken) {
  //     return this.http.post<Token>(`${this.environment.security.api}/token/refresh`, refreshToken).pipe(
  //       map(token => !!token),
  //       catchError(error => {
  //         this.redirecionarPaginaAcessoNegado('Token inválido ou expirado');
  //         return observableThrowError(error.json().error || this.mensagemErroBackend);
  //       })
  //     );
  //   } else {
  //     if (!this.router.isActive('validacao', false)) {
  //       this.router.navigate([this.environment.production ? 'acesso-negado' : 'login']);
  //     }
  //     return observableOf(false);
  //   }
  // }

  // autorizarAcessoAoRecurso(permissaoRecurso: string): Observable<boolean> {
  //   if (permissaoRecurso === 'page:home') {
  //     return observableOf(true);
  //   }

  //   if (this.permissoes) {
  //     const acesso = this.permissoes.find(permissao => permissao === permissaoRecurso);
  //     if (!acesso) {
  //       this.redirecionarPaginaAcessoNegado('Sem acesso ao recurso');
  //     }
  //     return observableOf(!!acesso);
  //   }

  //   return this.getRecursos(new HttpParams()).pipe(map(response => {
  //     this.permissoes = (response || []).map(recurso => recurso.nome);
  //     this.permissoes.push('home');
  //     const acesso = this.permissoes.find(permissao => permissao === permissaoRecurso);
  //     if (!acesso) {
  //       this.redirecionarPaginaAcessoNegado('Sem acesso ao recurso');
  //       return false;
  //     }
  //     return true;
  //   }),
  //     catchError(error => {
  //       this.redirecionarPaginaAcessoNegado('Erro ao carregar as permissões');
  //       return observableThrowError(error);
  //     })
  //   );
  // }

  // getRecursos(params: HttpParams): Observable<Recurso[]> {
  //   return this.http
  //     .get<Recurso[]>(`${this.environment.security.api}/token/permissoes/recursos`, { params }).pipe(
  //       catchError(error => {
  //         const msg: string = error.error.mensagem ? error.error.mensagem : '';
  //         this.redirecionarParaHomeEExibirMensagemErro(msg);
  //         return observableThrowError(error);
  //       }));
  // }

  // private redirecionarPaginaAcessoNegado(mensagem: string): void {
  //   this.router.navigate(['acesso-negado']).then(() => this.message.error(mensagem));
  // }

  // public redirecionarParaHomeEExibirMensagemErro(msg: string): void {
  //   this.message.error('Erro ao carregar recursos. ' + msg);
  //   this.router.navigate(['/']);
  // }

  // public substituirAccessToken(accessTokenString: string): void {
  //   const accessToken = JwtDecode<Identity>(accessTokenString);
  //   this.cookieService.put('access_token', accessTokenString, { path: `/`, expires: new Date(accessToken.exp * 1000) });
  // }

  // public limparTokens(): void {
  //   this.limparToken(true);
  // }

  // getPerfis(): Observable<Perfil[]> {
  //   if (!this.perfis$) {
  //     this.perfis$ = this.http
  //       .get<Perfil[]>(`${this.environment.security.api}/token/perfis`)
  //       .pipe(
  //         catchError(error => observableThrowError(error)),
  //         shareReplay(10)
  //       );
  //   }
  //   return this.perfis$;
  // }
}
