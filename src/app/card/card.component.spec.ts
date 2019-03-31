import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RdfService } from '../services/rdf.service';
import { AuthService } from '../services/solid.auth.service';
import { CardComponent } from './card.component';
describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  beforeEach(() => {
    const activatedRouteStub = {};
    const rdfServiceStub = {
      getProfile: () => ({}),
      updateProfile: () => ({})
    };
    const authServiceStub = {
      saveOldUserData: () => ({}),
      solidSignOut: () => ({})
    };
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [CardComponent],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteStub },
        { provide: RdfService, useValue: rdfServiceStub },
        { provide: AuthService, useValue: authServiceStub }
      ]
    });
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  describe('logout', () => {
    it('makes expected calls', () => {
      const authServiceStub: AuthService = fixture.debugElement.injector.get(
        AuthService
      );
      spyOn(authServiceStub, 'solidSignOut');
      component.logout();
      expect(authServiceStub.solidSignOut).toHaveBeenCalled();
    });
  });
});
