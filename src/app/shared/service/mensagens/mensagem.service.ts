import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({providedIn: 'root'})
export class MensagemService {
    constructor(private snackBar: MatSnackBar) { }

    public erro(mensagem: string): void {
        this.abrirSnack(mensagem, 'snack-erro');
    }

    public alerta(mensagem: string): void {
        this.abrirSnack(mensagem, 'snack-erro');
    }

    public aviso(mensagem: string): void {
        this.abrirSnack(mensagem, 'snack-aviso');
    }

    private abrirSnack(mensagem: string, classeCss: string): void {
        this.snackBar.open(mensagem, '', {
            duration: 4000,
            panelClass: [classeCss]
        });
    }
}
