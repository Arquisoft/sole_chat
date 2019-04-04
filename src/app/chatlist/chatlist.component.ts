import { Component, OnInit } from '@angular/core';
import {RdfService} from '../services/rdf.service';
import {FileManagerService} from '../services/file-manager.service';

@Component({
  selector: 'app-chatlist',
  templateUrl: './chatlist.component.html',
  styleUrls: ['./chatlist.component.css']
})
export class ChatlistComponent implements OnInit {

  dummyusers;

  constructor(private fileManager: FileManagerService) {

  }

  async ngOnInit() {
    await this.getUserList();
  }

  async getUserList() {
    this.dummyusers = [];
    await this.fileManager.getFriends(this.dummyusers);
  }
}
