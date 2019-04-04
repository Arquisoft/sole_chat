import {Component, Input, OnInit} from '@angular/core';
import { ChangeChatService } from '../services/change-chat.service';

@Component({
  selector: 'app-chatitem',
  templateUrl: './chatitem.component.html',
  styleUrls: ['./chatitem.component.css']
})
export class ChatitemComponent implements OnInit {
  @Input() user;
  constructor(private changeChat: ChangeChatService) { }

  ngOnInit() {
  }

  changeUser() {
    this.changeChat.user.next(this.user);
  }
}
