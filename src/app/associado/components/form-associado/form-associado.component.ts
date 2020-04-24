import { DadosModal } from './../../models/dados-modal';
import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { dataNoPassado } from 'src/app/shared/Validators/data-no-passado.validator';
import { ModalService } from './../../../modals/modal.service';
import { AssociadoDto } from './../../models/associado-dto.model';
import { AssociadoService } from './../../service/associado.service';
import { EscolaAcaoEnum } from 'src/app/shared/models/escolha-acao.enum';

@Component({
  selector: 'app-form-associado',
  templateUrl: './form-associado.component.html',
  styleUrls: ['./form-associado.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormAssociadoComponent implements OnInit {

  formAssociado: FormGroup;

  @ViewChild('nome', { static: true })
  private nome: ElementRef;

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private associadoService: AssociadoService,
    private modalService: ModalService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.nome.nativeElement.focus();
    const associado = this.activatedRoute.snapshot.data.associado as AssociadoDto;

    this.formAssociado = this.fb.group({
      nome: [associado.nome, [Validators.required, Validators.minLength(10), Validators.maxLength(70)]],
      nomeMae: [associado.nomeMae, [Validators.required, Validators.minLength(10), Validators.maxLength(70)]],
      nomePai: [associado.nomePai, [Validators.minLength(10), Validators.maxLength(70)]],
      dataNascimento: [associado.dataNascimento, [Validators.required, dataNoPassado]],
      morada: [associado.morada, [Validators.minLength(5), Validators.maxLength(100)]],
      concelho: [associado.concelho, [Validators.minLength(3), Validators.maxLength(70)]],
      distrito: [associado.distrito, [Validators.minLength(5), Validators.maxLength(70)]],
      telemovel: [associado.telemovel, [Validators.maxLength(9), Validators.pattern(/\d{9}/)]],
      ddi: [associado.ddi, [Validators.maxLength(3), Validators.pattern(/\d{3}/)]],
      codigoPostal: [associado.codigoPostal, [Validators.maxLength(7), Validators.pattern(/\d{7}/)]],
      email: [associado.email, [Validators.required, Validators.minLength(10), Validators.maxLength(50), Validators.email]],
      nacionalidade: [associado.nacionalidade, [Validators.required, Validators.minLength(5), Validators.maxLength(30)]]
    });
  }

  salvarAssociado(): void {
    const associado: AssociadoDto = this.formAssociado.value;
    this.associadoService.salvarAssociado(this.activatedRoute.snapshot.params.idAssociado, associado);
    this.formAssociado.reset();
  }

  cancelarCadastramento(): void {
    const dadosModal: DadosModal = {
      titulo: 'Associado',
      mensagem: 'Deseja cancelar a atualização do associado?',
      textoBotaoEsquerdo: 'Sim',
      textoBotaoDireito: 'Não'
    };

    this.modalService
      .executarSimNaoModal(dadosModal)
      .subscribe(resultado => {
        if (resultado === EscolaAcaoEnum.CONFIRMAR) {
          this.router.navigate(['']);
        }
      });
  }

  get hoje(): Date {
    return new Date();
  }
}
