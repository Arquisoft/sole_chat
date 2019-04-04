import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatitemComponent } from './chatitem.component';

describe('ChatitemComponent', () => {
  let component: ChatitemComponent;
  let fixture: ComponentFixture<ChatitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
