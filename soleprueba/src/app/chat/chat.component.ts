import { Component, OnInit, ViewChild } from '@angular/core';
import { SolidProfile } from '../models/solid-profile.model';
import { NgForm } from '@angular/forms';
import { RdfService } from '../services/rdf.service';
import { AuthService } from '../services/solid.auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  profile: SolidProfile;
  loadingProfile: Boolean;
  messageContent: String = "";

  @ViewChild('f') chatForm: NgForm;

  constructor(private rdf: RdfService, private auth: AuthService) {}

  ngOnInit() {
    this.loadingProfile = true;
    this.loadProfile();
  }

  async loadProfile() {
    try {
      this.loadingProfile = true;
      const profile = await this.rdf.getProfile();
      if (profile) {
        this.profile = profile;
        this.auth.saveOldUserData(profile);
      }

      this.loadingProfile = false;
    } catch (error) {
      console.log(`Error: ${error}`);
    }

  }

  async onSubmit () {
    if (!this.chatForm.invalid) {
      try {
        await this.rdf.addNewLinkedMessage(this.chatForm);
        this.messageContent = this.rdf.getMessage();
      } catch (err) {
        console.log(`Error: ${err}`);
      }
    }
  }

}
