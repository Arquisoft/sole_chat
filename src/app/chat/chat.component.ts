import { Component, OnInit, ViewChild } from '@angular/core';
import { SolidProfile } from '../models/solid-profile.model';
import { NgForm } from '@angular/forms';
import { RdfService } from '../services/rdf.service';
import { AuthService } from '../services/solid.auth.service';
import { ActivatedRoute } from '@angular/router';
import { FileManagerService } from '../services/file-manager.service';
import { windowWhen } from 'rxjs/operators';

//Methods defined in js files
declare function createFolder(path, folder): any;

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  dummymess = [
    { id: 11, content: 'Mr. Nice' },
    { id: 12, content: 'Narco' },
    { id: 13, content: 'Bombasto' },
    { id: 14, content: 'Celeritas' },
    { id: 15, content: 'Magneta' },
    { id: 16, content: 'RubberMan' },
    { id: 17, content: 'Dynama' },
    { id: 18, content: 'Dr IQ' },
    { id: 19, content: 'Magma' },
    { id: 20, content: 'Tornado' }
  ];
  profile: SolidProfile;
  loadingProfile: Boolean;
  messageContent: String = "";
  messageReceived: String = "";
  friend: String = "javi";

  @ViewChild('f') chatForm: NgForm;

  constructor(private rdf: RdfService, private auth: AuthService, private fileManager: FileManagerService) {

  }

  ngOnInit() {
    this.loadingProfile = true;
    this.loadProfile();
    this.getLastMessage();
    this.getMessageReceived();
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

      if (sessionStorage.getItem("friend") != null)
        this.friend = sessionStorage.getItem("friend");
      else
        this.friend = "javi";

    } catch (error) {
      console.log(`Error: ${error}`);
    }

  }

  async getLastMessage() {
    var res = await this.fileManager.retrieveLastMessage();
    this.messageContent = res;
  }

  async getMessageReceived() {
    //var friend = (<HTMLInputElement>document.getElementById("friend")).textContent;
    //console.log(this.friend);
    var f;
    if (sessionStorage.getItem("friend") != null)
      f = sessionStorage.getItem("friend");
    else
      f = "javi";
    var res = await this.fileManager.retrieveLastMessageReceived(f);
    this.messageReceived = res;
  }

  async onSubmit() {
    var message = (<HTMLInputElement>document.getElementById("message")).value;
    this.fileManager.saveSomethingInThePOD(message, this.friend);
  }

  changeFriend() {
    var newFriend = prompt("To which friend do you want to talk to?");
    sessionStorage.setItem("friend", newFriend);
    //window.location.reload();
  }

}
