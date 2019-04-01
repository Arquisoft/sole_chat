import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/solid.auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  profileImage = '/assets/images/profile.png';
  constructor(private auth: AuthService) { }

  ngOnInit() {
    const profile=JSON.parse(localStorage.getItem('oldProfileData'));
    this.profileImage=profile.image?profile.image:'/assets/images/profile.png';
  }

  onSignOut() {
    this.auth.solidSignOut();
    localStorage.removeItem('oldProfileData');
    this.profileImage='/assets/images/profile.png';
    console.log("deslogueado")
  }

}
