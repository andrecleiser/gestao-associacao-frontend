import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-associado',
  templateUrl: './form-associado.component.html',
  styleUrls: ['./form-associado.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormAssociadoComponent implements OnInit {

  formAssociado: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formAssociado = this.fb.group([]);
  }

  salvarAssociado(): void {
    alert('salvou!');
  }
}
