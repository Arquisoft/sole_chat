import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FileManagerService } from '../services/file-manager.service';
import { ChangeChatService } from '../services/change-chat.service';
import { RdfService } from '../services/rdf.service';

//Methods defined in js files
declare function createFolder(path, folder): any;

@Component({
  selector: 'app-chat', 
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  user: any;

  @ViewChild('f') chatForm: NgForm;

  constructor(private rdf: RdfService, private fileManager: FileManagerService, private changeFriend: ChangeChatService) {
  }

  ngOnInit() {
    this.changeFriend.user.subscribe(res => {
      console.log(res);
      this.user = res;
      this.loadMessages();
    });
  }

  async onSubmit() {
    if (this.user != null) {
      var message = (<HTMLInputElement>document.getElementById('inputMessage')).value;
      let direction = await this.fileManager.getDirection(this.user.id) + "/index.ttl";
      await this.fileManager.sendMessage(message, direction, this.user.messages);
      await this.rdf.updateManager.addDownstreamChangeListener(direction, this.loadMessages());
    }
  }

  private async loadMessages() {
    if (this.user != null) {
      this.user.messages = [];
      await this.fileManager.getMessages(this.user.messages, this.user.id);
    }
  }
}
