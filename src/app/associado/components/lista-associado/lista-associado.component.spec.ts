import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAssociadoComponent } from './lista-associado.component';

describe('ListaAssociadoComponent', () => {
  let component: ListaAssociadoComponent;
  let fixture: ComponentFixture<ListaAssociadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaAssociadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAssociadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
