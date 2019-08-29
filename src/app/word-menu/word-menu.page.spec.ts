import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordMenuPage } from './word-menu.page';

describe('WordMenuPage', () => {
  let component: WordMenuPage;
  let fixture: ComponentFixture<WordMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordMenuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
