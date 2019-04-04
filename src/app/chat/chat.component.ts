import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FileManagerService } from '../services/file-manager.service';
import { ChangeChatService } from '../services/change-chat.service';
import { Subject } from 'rxjs';
import { RdfService } from '../services/rdf.service';
import { WindowService } from '@ng-select/ng-select/ng-select/window.service';

//Methods defined in js files
declare function createFolder(path, folder): any;

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  user: any;
  public messages: Subject<null>;

  @ViewChild('f') chatForm: NgForm;
  @ViewChild('scroller') scrollPane: ElementRef;

  constructor(private fileManager: FileManagerService, private changeFriend: ChangeChatService,
    private rdf: RdfService) {

  }

  ngOnInit() {
    this.changeFriend.user.subscribe(async res => {
      this.user = res;
      if (this.user != null) {
        this.loadMessages();
        this.addListener(this.user, this.fileManager);
      }
    });
  }

  async addListener(user, fm) {
    let direction = await this.fileManager.getDirection(this.user.id) + "/index.ttl";
    let directionForSocket = "wss" + direction.split("https")[1];

    let socket = new WebSocket(directionForSocket);

    socket.onopen = function () {
      this.send('sub ' + direction);
    };

    socket.onmessage = function (msg) {
      if (msg.data && msg.data.slice(0, 3) === 'pub') {
        fm.getLastMessage(user.messages, user.id);
      }
    };
  }

  async onSubmit() {
    if (this.user != null) {
      var message = (<HTMLInputElement>document.getElementById('inputMessage')).value;
      let direction = await this.fileManager.getDirection(this.user.id) + "/index.ttl";
      await this.fileManager.sendMessage(message, direction, this.user.messages);
    }
  }

  private async loadMessages() {
    this.user.messages = [];
    await this.fileManager.getMessages(this.user.messages, this.user.id);
  }

}
