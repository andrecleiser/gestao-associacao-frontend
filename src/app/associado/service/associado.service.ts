import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PerfilAssociadoDto } from '../models/perfil-associado.model';
import { environment } from './../../../environments/environment';

@Injectable()
export class AssociadoService {

    constructor(private http: HttpClient) {}

    public listarPerfilAssociados(): Observable<PerfilAssociadoDto[]> {
        return this.http.get<PerfilAssociadoDto[]>(`${environment.endpoints.associados}/perfis`);
    }
}
