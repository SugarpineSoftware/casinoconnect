import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QRModalPage } from './qrmodal.page';

describe('QRModalPage', () => {
  let component: QRModalPage;
  let fixture: ComponentFixture<QRModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QRModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QRModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
