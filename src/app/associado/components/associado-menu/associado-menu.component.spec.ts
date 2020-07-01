import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociadoMenuComponent } from './associado-menu.component';

describe('HomeComponent', () => {
  let component: AssociadoMenuComponent;
  let fixture: ComponentFixture<AssociadoMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociadoMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociadoMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
