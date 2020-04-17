import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FotoAssociadoComponent } from './foto-associado.component';

describe('FotoAssociadoComponent', () => {
  let component: FotoAssociadoComponent;
  let fixture: ComponentFixture<FotoAssociadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FotoAssociadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FotoAssociadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
