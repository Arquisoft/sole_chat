import { Component, OnInit, ViewChild } from '@angular/core';
import { SolidProfile } from '../models/solid-profile.model';
import { NgForm } from '@angular/forms';
import { RdfService } from '../services/rdf.service';
import { AuthService } from '../services/solid.auth.service';
import { ActivatedRoute } from '@angular/router';
import { FileManagerService} from '../services/file-manager.service';

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
  friendsList:String;

  @ViewChild('f') chatForm: NgForm;

  constructor(private rdf: RdfService, private auth: AuthService,private fileManager: FileManagerService) {
  
  }

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
        this.messageContent = this.rdf.getMessage();
      
      }

      this.rdf.getFriends().then(friends=>friends.forEach(element => {
        console.log(element);
        console.log("elemento");
        
      }));
      const friends=await this.rdf.getFriends();
     
      console.log("a")
      console.log(friends);
      console.log("b")
      console.log(friends.length);
      


      this.loadingProfile = false;
    } catch (error) {
      console.log(`Error: ${error}`);
    }

     
   
   
    


  }

  async onSubmit () {
      this.fileManager.saveSomethingInThePOD();
  }

}
