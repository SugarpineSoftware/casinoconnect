import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMealEntryPage } from './new-meal-entry.page';

describe('NewMealEntryPage', () => {
  let component: NewMealEntryPage;
  let fixture: ComponentFixture<NewMealEntryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMealEntryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMealEntryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
