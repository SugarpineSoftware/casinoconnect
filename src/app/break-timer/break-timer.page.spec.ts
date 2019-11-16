import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakTimerPage } from './break-timer.page';

describe('BreakTimerPage', () => {
  let component: BreakTimerPage;
  let fixture: ComponentFixture<BreakTimerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreakTimerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreakTimerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
