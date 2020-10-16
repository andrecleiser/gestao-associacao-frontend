import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DadosModal } from './../../associado/models/dados-modal';
import { EscolhaAcaoEnum } from './../../shared/models/escolha-acao.enum';

@Component({
  selector: 'app-sim-nao.modal',
  templateUrl: './sim-nao-modal.component.html',
  styleUrls: ['./sim-nao-modal.component.scss']
})
export class SimNaoModalComponent {

  constructor(
    public dialogRef: MatDialogRef<SimNaoModalComponent>,
    @Inject(MAT_DIALOG_DATA) public dadosModal: DadosModal
  ) { }

  get confirmar(): EscolhaAcaoEnum {
    return EscolhaAcaoEnum.CONFIRMAR;
  }

  get cancelar(): EscolhaAcaoEnum {
    return EscolhaAcaoEnum.CANCELAR;
  }

  cancelarModal(): void {
    this.dialogRef.close();
  }
}
