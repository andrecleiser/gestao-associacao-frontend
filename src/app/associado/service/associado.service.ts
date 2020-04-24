import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PerfilAssociadoDto } from '../models/perfil-associado-dto.model';
import { environment } from './../../../environments/environment';
import { AssociadoDto } from './../models/associado-dto.model';

@Injectable()
export class AssociadoService {

    constructor(
        private http: HttpClient,
        private router: Router
    ) {}

    public listarPerfilAssociados(): Observable<PerfilAssociadoDto[]> {
        return this.http.get<PerfilAssociadoDto[]>(`${environment.endpoints.associados}/perfis`);
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
