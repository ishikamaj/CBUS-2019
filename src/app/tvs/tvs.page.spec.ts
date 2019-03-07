import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvsPage } from './tvs.page';

describe('TvsPage', () => {
  let component: TvsPage;
  let fixture: ComponentFixture<TvsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
