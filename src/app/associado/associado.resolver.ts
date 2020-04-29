import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { AssociadoDto } from './models/associado-dto.model';
import { AssociadoService } from './service/associado.service';

@Injectable()
export class AssociadoResolver implements Resolve<AssociadoDto> {

    constructor(private associadoService: AssociadoService){}

    resolve(route: ActivatedRouteSnapshot): Observable<AssociadoDto> | Promise<AssociadoDto> | AssociadoDto {

        return this.associadoService.buscarAssociadoPorId(route.params.idAssociado).pipe(take(1));
    }
}