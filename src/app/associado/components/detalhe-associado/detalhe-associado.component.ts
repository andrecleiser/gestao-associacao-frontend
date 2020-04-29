import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PerfilAssociadoDto } from '../../models/perfil-associado-dto.model';
import { CapturarImagemService } from './../../../captura-imagem-browser/service/capturar-imagem.service';

@Component({
  selector: 'app-detalhe-associado',
  templateUrl: './detalhe-associado.component.html',
  styleUrls: ['./detalhe-associado.component.scss']
})
export class DetalheAssociadoComponent implements OnInit {

  @Input()
  public dadosAssociado: PerfilAssociadoDto;

  constructor(
    private route: Router,
    private capturarImagemService: CapturarImagemService
  ) { }

  ngOnInit(): void {
  }

  atualizaAssociado(): void {
    this.route.navigate(['/form-associado', this.dadosAssociado.idAssociado]);
  }

  atualizarFoto(): void {
    this.capturarImagemService
      .capturarImagem()
      .subscribe(foto => {
        this.dadosAssociado.foto = foto.nativeElement.toDataURL();
      });
  }
}
