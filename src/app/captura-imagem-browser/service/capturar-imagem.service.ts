import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CapturaImagemBrowserComponent } from './../captura-imagem-browser.component';
import { MatDialog } from '@angular/material/dialog';
import { Injectable, ElementRef } from '@angular/core';

@Injectable()
export class CapturarImagemService {

  constructor(public dialog: MatDialog) { }

  public capturarImagem(): Observable<ElementRef> {
    const dialogRef = this.dialog.open(CapturaImagemBrowserComponent, {
      width: '750px'
    });

    return dialogRef.afterClosed().pipe(take(1));
  }
}
