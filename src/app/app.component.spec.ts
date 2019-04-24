import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import {  NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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



// Services
import { AuthService } from './services/solid.auth.service';
 import { AuthGuard } from './services/auth.guard.service';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const routes: Routes = [

  {
    path:'chat',
    component: ChatComponent
  },
  {
    path:'about',
    component: AboutComponent
  }
  ,
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'login-popup',
    component: LoginPopupComponent
  },

  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'card',
    component: CardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];


describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,  
                LoginComponent,
                LoginPopupComponent,
                DashboardComponent,
                CardComponent,
                RegisterComponent,
                ChatComponent,
                AboutComponent,
                NavComponent,
                UseritemComponent, 
                UserlistComponent, ChatitemComponent, 
                ChatlistComponent, EmojiPickerComponent
              ],
              imports: [
                BrowserModule, 
                FormsModule,
                RouterModule,  
                RouterModule.forRoot(routes),
                NgSelectModule,
                ToastrModule.forRoot(),
                BrowserAnimationsModule //required for toastr
              ],
              providers: [AuthService],
              
              schemas: [ NO_ERRORS_SCHEMA]
        })
            .compileComponents();
    }));
 
    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        
        fixture.detectChanges();
    });
 
   it('should create', () => {
        expect(component).toBeTruthy();
    });
     
    
});