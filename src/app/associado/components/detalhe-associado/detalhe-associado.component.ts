import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WebcamImage } from 'ngx-webcam';
import { PerfilAssociadoDto } from '../../models/perfil-associado-dto.model';
import { CapturarImagemService } from './../../../captura-imagem-browser/service/capturar-imagem.service';
import { AssociadoService } from './../../service/associado.service';

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
    private activatedRoute: ActivatedRoute,
    private capturarImagemService: CapturarImagemService,
    private associadoService: AssociadoService
  ) { }

  ngOnInit(): void {
  }

  atualizaAssociado(): void {
    this.route.navigate(['form-associado', this.dadosAssociado.idAssociado], { relativeTo: this.activatedRoute.parent });
  }

  atualizarFoto(): void {
    this.capturarImagemService
      .capturarImagem()
      .subscribe(foto => this.atualizarFotoAssociado(foto));
  }

  private atualizarFotoAssociado(foto: WebcamImage) {
    if (foto) {
      this.dadosAssociado.foto = foto.imageAsDataUrl;
      this.associadoService
        .atualizarFotoAssociado(this.dadosAssociado.idAssociado, foto.imageAsBase64)
        .subscribe();
    }
  }
}
