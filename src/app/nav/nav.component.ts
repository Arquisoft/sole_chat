import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/solid.auth.service';
import { RdfService } from '../services/rdf.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  profileImage = '/assets/images/profile.png';

  constructor(
    private auth: AuthService,
    private rdf: RdfService,
    private router : Router) { }

  ngOnInit() {
    this.loadProfile();
  }

  async loadProfile(){
    const profile=  await this.rdf.getProfile();
    this.profileImage=profile?profile.image:'/assets/images/profile.png';
  }

  onSignOut() {
    this.auth.solidSignOut();
    localStorage.removeItem('oldProfileData');
    this.profileImage='/assets/images/profile.png';
    console.log("deslogueado")
  }

  showNav() {
    return this.router.url != "/" &&
           this.router.url != "/login";
  }

}
