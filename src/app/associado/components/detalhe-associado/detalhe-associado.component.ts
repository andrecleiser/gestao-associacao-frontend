import { PerfilAssociadoDto } from './../../models/perfil-associado.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detalhe-associado',
  templateUrl: './detalhe-associado.component.html',
  styleUrls: ['./detalhe-associado.component.scss']
})
export class DetalheAssociadoComponent implements OnInit {

  @Input()
  public dadosAssociado: PerfilAssociadoDto;

  constructor() { }

  ngOnInit(): void {
  }

}
