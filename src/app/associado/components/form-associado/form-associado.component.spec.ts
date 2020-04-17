import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAssociadoComponent } from './form-associado.component';

describe('FormAssociadoComponent', () => {
  let component: FormAssociadoComponent;
  let fixture: ComponentFixture<FormAssociadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAssociadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAssociadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
