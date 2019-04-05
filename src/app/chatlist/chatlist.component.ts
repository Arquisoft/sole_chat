import { Component, OnInit } from '@angular/core';
import {RdfService} from '../services/rdf.service';
import {FileManagerService} from '../services/file-manager.service';

@Component({
  selector: 'app-chatlist',
  templateUrl: './chatlist.component.html',
  styleUrls: ['./chatlist.component.css']
})
export class ChatlistComponent implements OnInit {

  chatList;

  constructor(private fileManager: FileManagerService) {

  }

  async ngOnInit() {
    await this.getChatList();
  }

  async getChatList() {
    this.chatList = [];
    await this.fileManager.getActiveChats(this.chatList);
  }
}
