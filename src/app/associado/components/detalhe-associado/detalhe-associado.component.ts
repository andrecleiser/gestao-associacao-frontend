import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PerfilAssociadoDto } from '../../models/perfil-associado-dto.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detalhe-associado',
  templateUrl: './detalhe-associado.component.html',
  styleUrls: ['./detalhe-associado.component.scss']
})
export class DetalheAssociadoComponent implements OnInit {

  @Input()
  public dadosAssociado: PerfilAssociadoDto;

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  atualizaAssociado(): void {
    this.route.navigate(['/form-associado', this.dadosAssociado.idAssociado]);
  }
}
