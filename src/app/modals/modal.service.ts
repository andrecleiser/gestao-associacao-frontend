import { take } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DadosModal } from './../associado/models/dados-modal';
import { EscolhaAcaoEnum } from './../shared/models/escolha-acao.enum';
import { SimNaoModalComponent } from './sim-nao-modal/sim-nao.modal.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private dialog: MatDialog) { }

  public executarSimNaoModal(dadosModal: DadosModal, tamanhoModal: string = '300'): Observable<EscolhaAcaoEnum> {
    const dialogRef = this.dialog.open(
      SimNaoModalComponent,
      {
        width: `${tamanhoModal}px`,
        data: dadosModal
      }
    );
    dialogRef.disableClose = true;
    return dialogRef
      .afterClosed()
      .pipe(take(1));
  }
}
