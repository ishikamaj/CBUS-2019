import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechTipsPage } from './tech-tips.page';

describe('TechTipsPage', () => {
  let component: TechTipsPage;
  let fixture: ComponentFixture<TechTipsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechTipsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechTipsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
