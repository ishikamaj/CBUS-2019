import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplianceTipsPage } from './appliance-tips.page';

describe('ApplianceTipsPage', () => {
  let component: ApplianceTipsPage;
  let fixture: ComponentFixture<ApplianceTipsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplianceTipsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplianceTipsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
