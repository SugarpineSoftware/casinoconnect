import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WikiDocPage } from './wiki-doc.page';

describe('WikiDocPage', () => {
  let component: WikiDocPage;
  let fixture: ComponentFixture<WikiDocPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WikiDocPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WikiDocPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
