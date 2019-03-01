import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterTipsPage } from './water-tips.page';

describe('WaterTipsPage', () => {
  let component: WaterTipsPage;
  let fixture: ComponentFixture<WaterTipsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaterTipsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterTipsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
