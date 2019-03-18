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
    window.location.reload();
  }

  async onSubmit() {
    var message = (<HTMLInputElement>document.getElementById("message")).value;
    this.fileManager.saveSomethingInThePOD(message);
  }

  changeFriend() {
    var newFriend = prompt("To which friend do you want to talk to?");
    sessionStorage.setItem("friend", newFriend);
    window.location.reload();
  }

}
