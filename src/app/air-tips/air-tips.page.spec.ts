import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirTipsPage } from './air-tips.page';

describe('AirTipsPage', () => {
  let component: AirTipsPage;
  let fixture: ComponentFixture<AirTipsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirTipsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirTipsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
