import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanModalPage } from './scan-modal.page';

describe('ScanModalPage', () => {
  let component: ScanModalPage;
  let fixture: ComponentFixture<ScanModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScanModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScanModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
