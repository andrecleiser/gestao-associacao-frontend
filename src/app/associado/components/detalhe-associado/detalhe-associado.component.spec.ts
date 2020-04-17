import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheAssociadoComponent } from './detalhe-associado.component';

describe('DetalheAssociadoComponent', () => {
  let component: DetalheAssociadoComponent;
  let fixture: ComponentFixture<DetalheAssociadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalheAssociadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheAssociadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
