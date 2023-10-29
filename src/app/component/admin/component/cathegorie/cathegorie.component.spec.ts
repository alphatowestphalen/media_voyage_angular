/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CathegorieComponent } from './cathegorie.component';

describe('CathegorieComponent', () => {
  let component: CathegorieComponent;
  let fixture: ComponentFixture<CathegorieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CathegorieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CathegorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
