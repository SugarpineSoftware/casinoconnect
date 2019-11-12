import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMachinePage } from './view-machine.page';

describe('ViewMachinePage', () => {
  let component: ViewMachinePage;
  let fixture: ComponentFixture<ViewMachinePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMachinePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMachinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
