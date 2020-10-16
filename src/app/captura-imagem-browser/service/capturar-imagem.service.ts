import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WebcamImage } from 'ngx-webcam';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { CapturaImagemBrowserComponent } from './../captura-imagem-browser.component';

@Injectable()
export class CapturarImagemService {

  constructor(public dialog: MatDialog) { }

  public capturarImagem(): Observable<WebcamImage> {
    const dialogRef = this.dialog.open(CapturaImagemBrowserComponent, {
      width: '450px'
    });

    return dialogRef.afterClosed().pipe(take(1));
  }
}
