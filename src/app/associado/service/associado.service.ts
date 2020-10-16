import { MensagemService } from './../../shared/service/mensagens/mensagem.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { PerfilAssociadoDto } from '../models/perfil-associado-dto.model';
import { environment } from './../../../environments/environment';
import { AssociadoDto } from './../models/associado-dto.model';

@Injectable()
export class AssociadoService {
    public MEDIA_IMAGEM = 'data:image/png;base64,';

    constructor(
        private http: HttpClient,
        private router: Router,
        private mensagemService: MensagemService
    ) { }

    public listarPerfilAssociados(): Observable<PerfilAssociadoDto[]> {
        return this.http
            .get<PerfilAssociadoDto[]>(`${environment.endpoints.associados}/perfis`)
            .pipe(
                tap(perfis => perfis.forEach(perfil => perfil.foto = (perfil.foto) ? this.MEDIA_IMAGEM + perfil.foto : undefined))
            );
    }

    public buscarAssociadoPorId(idAssociado: number): Observable<AssociadoDto> {
        const url = `${environment.endpoints.associados}/${idAssociado}`;
        return this.http.get<AssociadoDto>(url);
    }

    public salvarAssociado(idAssociado: string, associado: AssociadoDto) {
        if (idAssociado) {
            this.atualizarAssociado(idAssociado, associado);
        } else {
            this.novoAssociado(associado);
        }
    }

    public atualizarFotoAssociado(idAssociado: number, foto: string): Observable<undefined> {
        const url = `${environment.endpoints.associados}/${idAssociado}/foto`;
        return this.http.put<undefined>(url, foto).pipe(
            take(1),
            tap(() => this.mensagemService.aviso('Foto atualizada com sucesso. Aguarde atualização no browser...'))
        );
    }

    private atualizarAssociado(idAssociado: string, associado: AssociadoDto): void {
        const url = `${environment.endpoints.associados}/${idAssociado}`;
        this.http
            .put(url, associado)
            .pipe(take(1))
            .subscribe(() => this.router.navigate(['']));
    }

    private novoAssociado(associado: AssociadoDto): void {
        this.http
            .post(environment.endpoints.associados, associado)
            .pipe(take(1))
            .subscribe(() => this.router.navigate(['']));
    }

}
