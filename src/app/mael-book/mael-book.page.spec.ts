import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaelBookPage } from './mael-book.page';

describe('MaelBookPage', () => {
  let component: MaelBookPage;
  let fixture: ComponentFixture<MaelBookPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaelBookPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaelBookPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
