import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-foto-associado',
  templateUrl: './foto-associado.component.html',
  styleUrls: ['./foto-associado.component.scss']
})

export class FotoAssociadoComponent implements OnInit {

  private MIME_TYPE_FOTO = 'data:image/jpeg;base64,';

  @Input()
  public fotoBase64: string;

  constructor() { }

  ngOnInit(): void {
  }

  public get foto(): string {
    return `${this.MIME_TYPE_FOTO}${this.fotoBase64}`;
  }
}
