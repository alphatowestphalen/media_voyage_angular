/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NotFondComponent } from './notFond.component';

describe('NotFondComponent', () => {
  let component: NotFondComponent;
  let fixture: ComponentFixture<NotFondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotFondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
