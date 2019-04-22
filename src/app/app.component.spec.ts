import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {NO_ERRORS_SCHEMA } from '@angular/core';

import { NavComponent } from './nav/nav.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UseritemComponent } from './useritem/useritem.component';

import { ChatitemComponent } from './chatitem/chatitem.component';
import { ChatlistComponent } from './chatlist/chatlist.component';
import { ChatComponent } from './chat/chat.component';
import { AboutComponent } from './about/about.component';
import {LoginPopupComponent} from './login-popup/login-popup.component';
import {LoginComponent} from './login/login.component';
import { CardComponent } from './card/card.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmojiPickerComponent } from './emoji-picker/emoji-picker.component';

import { RouterTestingModule } from '@angular/router/testing';

  TestBed.configureTestingModule({
    imports: [RouterTestingModule], 
    declarations: [AppComponent],
  });
  describe('AppComponent', () => {
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [    
          RouterTestingModule, NavComponent, UseritemComponent, UserlistComponent,
          ChatitemComponent, ChatlistComponent, UseritemComponent,UserlistComponent    
        ],
        declarations: [
          AppComponent
        ],
        schemas: [NO_ERRORS_SCHEMA]
      }).compileComponents();
      }));});
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to solid-app!');
  }));
});
