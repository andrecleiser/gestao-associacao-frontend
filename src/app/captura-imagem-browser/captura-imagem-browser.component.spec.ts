import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapturaImagemBrowserComponent } from './captura-imagem-browser.component';

describe('CapturaImagemBrowserComponent', () => {
  let component: CapturaImagemBrowserComponent;
  let fixture: ComponentFixture<CapturaImagemBrowserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapturaImagemBrowserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapturaImagemBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
