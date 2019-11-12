import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumPostPage } from './forum-post.page';

describe('ForumPostPage', () => {
  let component: ForumPostPage;
  let fixture: ComponentFixture<ForumPostPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumPostPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumPostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
