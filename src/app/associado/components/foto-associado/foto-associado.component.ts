import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-foto-associado',
  templateUrl: './foto-associado.component.html',
  styleUrls: ['./foto-associado.component.scss']
})

export class FotoAssociadoComponent implements OnInit {

  @Input()
  public fotoBase64: string;

  constructor() { }

  ngOnInit(): void {
  }

  public get foto(): string {
    return this.fotoBase64;
  }
}
