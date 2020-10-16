import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { UsuarioService } from '../service/auth/usuario.service';
import { MensagemService } from './../service/mensagens/mensagem.service';


/* tslint:disable:no-any */
@Injectable( )
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private usuario: UsuarioService,
    private mensagemService: MensagemService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next
      .handle(this.processarRequisicao(req))
      .pipe(
            tap((evento: HttpEvent<any>) => { }),
            catchError(resposta => this.processarErroResposta(resposta))
      );
  }

  processarRequisicao(requisicao: HttpRequest<any>): HttpRequest<any> {
    const reqWithCredentials: HttpRequest<any> = requisicao.clone({withCredentials: true });

    return reqWithCredentials;
  }

  processarErroResposta(response: object): Observable<HttpEvent<any>> {
    if (response instanceof HttpErrorResponse) {
      let mensagemErro = '';
      if (!response.error?.mensagem && response.status === 401) {
        this.usuario.efetuarLogout();
        mensagemErro = `Erro: sessão expirou. Aceda novamente à aplicação, por favor!`;
      } else {
        const mensagem = response.error?.mensagem ? response.error.mensagem : response.message;
        const stackMsg = response.error?.stack ? `\nErro servidor:: ${response.error.stack}` : '';
        mensagemErro = `${mensagem}${stackMsg}`;
      }
      this.mensagemService.erro(`Erro: ${mensagemErro}`);
    }
    return throwError(response);
  }
}
