import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightingTipsPage } from './lighting-tips.page';

describe('LightingTipsPage', () => {
  let component: LightingTipsPage;
  let fixture: ComponentFixture<LightingTipsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightingTipsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightingTipsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
