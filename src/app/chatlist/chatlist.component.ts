import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {RdfService} from '../services/rdf.service';
import {FileManagerService} from '../services/file-manager.service';

@Component({
  selector: 'app-chatlist',
  templateUrl: './chatlist.component.html',
  styleUrls: ['./chatlist.component.css']
})
export class ChatlistComponent implements OnInit {
  @Output() chatListEvent = new EventEmitter<string>();
  chatList;

  constructor(private fileManager: FileManagerService,  private rdf: RdfService) {

  }

  async ngOnInit() {
    await this.getChatList();
    await this.addListener();
  }

  async addListener() {
    let webId = await this.rdf.getWebID();
    let direction = webId.split('/profile')[0] + '/public/Sole/chatsIndex.ttl';
    let directionForSocket = 'wss' + direction.split('https')[1];

    let socket = new WebSocket(directionForSocket);
    let comp = this;

    socket.onopen = function () {
        this.send('sub ' + direction);
        console.log("listening for " + directionForSocket);
    };

    socket.onmessage = function (msg) {
        if (msg.data && msg.data.slice(0, 3) === 'pub') {
          setTimeout(function () {
            comp.getChatList();
          }, 3000);
        }
    };
  }

  async getChatList() {
    this.chatList = [];
    await this.fileManager.getActiveChats(this.chatList);
  }

  update(event) {
    this.getChatList();
    this.chatListEvent.emit('eventDesc');
  }
}
