import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
    private associadoService: AssociadoService,
    private capturarImagemService: CapturarImagemService
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

  private atualizarFotoAssociado(foto: ElementRef) {
    if (foto) {
      this.dadosAssociado.foto = foto.nativeElement.toDataURL();
      const textoBase64 = 'base64,';
      const inicioBase64 = this.dadosAssociado.foto.indexOf(textoBase64);
      const fotoBase64 = this.dadosAssociado.foto.substring(inicioBase64 + textoBase64.length);
      this.associadoService.atualizarFotoAssociado(this.dadosAssociado.idAssociado, fotoBase64).subscribe(() => alert('tudo certo!'));
    }
  }
}
