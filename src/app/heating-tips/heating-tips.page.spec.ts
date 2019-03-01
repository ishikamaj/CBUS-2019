import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeatingTipsPage } from './heating-tips.page';

describe('HeatingTipsPage', () => {
  let component: HeatingTipsPage;
  let fixture: ComponentFixture<HeatingTipsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeatingTipsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeatingTipsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
