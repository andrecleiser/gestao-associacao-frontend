import { tap } from 'rxjs/operators';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpDownloadProgressEvent, HttpEventType } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ProgressoRequisicaoInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next
            .handle(req)
            .pipe(
                tap(evento => {
                    if (evento.type === HttpEventType.DownloadProgress) {
                        console.log(`Variando: ${evento.loaded} e total: ${evento.total}`);
                    }
                })
            );
    }
}
