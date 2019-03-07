import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliancesPage } from './appliances.page';

describe('AppliancesPage', () => {
  let component: AppliancesPage;
  let fixture: ComponentFixture<AppliancesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppliancesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppliancesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
