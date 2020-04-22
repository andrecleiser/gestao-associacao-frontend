import { AssociadoService } from './../../service/associado.service';
import { PerfilAssociadoDto } from '../../models/perfil-associado-dto.model';
import { Observable } from 'rxjs';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-lista-associado',
  templateUrl: './lista-associado.component.html',
  styleUrls: ['./lista-associado.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListaAssociadoComponent implements OnInit {

  public perfisAssociado$: Observable<PerfilAssociadoDto[]>;

  constructor(private associadoService: AssociadoService) { }

  ngOnInit(): void {
    this.perfisAssociado$ = this.associadoService.listarPerfilAssociados();
  }

}
