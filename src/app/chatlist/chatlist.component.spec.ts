import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatlistComponent } from './chatlist.component';

describe('ChatlistComponent', () => {
  let component: ChatlistComponent;
  let fixture: ComponentFixture<ChatlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
