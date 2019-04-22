import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {NO_ERRORS_SCHEMA } from '@angular/core';


import { UseritemComponent } from './useritem.component';

describe('UseritemComponent', () => {
  let component: UseritemComponent;
  let fixture: ComponentFixture<UseritemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseritemComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseritemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
 
});
