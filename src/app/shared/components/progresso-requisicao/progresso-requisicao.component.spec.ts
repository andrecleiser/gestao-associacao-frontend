import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressoRequisicaoComponent } from './progresso-requisicao.component';

describe('ProgressoCarregamentoComponent', () => {
  let component: ProgressoRequisicaoComponent;
  let fixture: ComponentFixture<ProgressoRequisicaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressoRequisicaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressoRequisicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
