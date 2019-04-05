import {Component, Input, OnInit} from '@angular/core';
import { ChangeChatService } from '../services/change-chat.service';

@Component({
  selector: 'app-chatitem',
  templateUrl: './chatitem.component.html',
  styleUrls: ['./chatitem.component.css']
})
export class ChatitemComponent implements OnInit {
  @Input() chat;
  constructor(private changeChat: ChangeChatService) { }

  ngOnInit() {
  }

  changeUser() {
    this.changeChat.chat.next(this.chat);
  }
}
