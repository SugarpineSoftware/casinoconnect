import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QrPopupPage } from './qr-popup.page';

describe('QrPopupPage', () => {
  let component: QrPopupPage;
  let fixture: ComponentFixture<QrPopupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QrPopupPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QrPopupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
