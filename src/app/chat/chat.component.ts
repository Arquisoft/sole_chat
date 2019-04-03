import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FileManagerService } from '../services/file-manager.service';
import { ChangeChatService } from '../services/change-chat.service';
import * as $ from "protractor";


//Methods defined in js files
declare function createFolder(path, folder): any;

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  user: any;
  dummyusers;


  @ViewChild('f') chatForm: NgForm;


  constructor(private fileManager: FileManagerService, private changeFriend: ChangeChatService,private element) {
  }

  ngOnInit() {
    this.changeFriend.user.subscribe(res => {
      console.log(res);
      this.user = res;
      this.loadMessages();
      this.loadUserList();
    });


  }

  async onSubmit() {
    if (this.user != null) {
      var message = (<HTMLInputElement>document.getElementById('inputMessage')).value;
      await this.fileManager.sendMessage(message, this.user.id, this.user.messages);
    }
  }

  async loadUserList() {
    this.dummyusers = [];
    await this.fileManager.getFriends(this.dummyusers);
  }

  private async loadMessages() {
    if (this.user != null) {
      this.user.messages = [];
      await this.fileManager.getMessages(this.user.messages, this.user.id);
    }
  }



  createNewChat() {
    console.log("Submiteado");
    let foo = $.$.
    console.log($(".new-chat-chk"));

  }
}
