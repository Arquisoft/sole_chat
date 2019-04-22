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
          ChatitemComponent, ChatlistComponent, UseritemComponent,UserlistComponent,
          AppComponent,
            LoginComponent,
            LoginPopupComponent,
            DashboardComponent,
            CardComponent,          
            ChatComponent,
            AboutComponent,
            NavComponent, UseritemComponent, 
            UserlistComponent, ChatitemComponent, 
            ChatlistComponent, EmojiPickerComponent    
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
  
});
