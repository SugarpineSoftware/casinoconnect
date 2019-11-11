import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumPostsPage } from './forum-posts.page';

describe('ForumPostsPage', () => {
  let component: ForumPostsPage;
  let fixture: ComponentFixture<ForumPostsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumPostsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumPostsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
