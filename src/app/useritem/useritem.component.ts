import { Component, OnInit, Input } from '@angular/core';
import { ChangeChatService } from '../services/change-chat.service';

@Component({
  selector: 'app-useritem',
  templateUrl: './useritem.component.html',
  styleUrls: ['./useritem.component.css']
})
export class UseritemComponent implements OnInit {
  @Input() user;
  constructor(private changeFriend: ChangeChatService) { }

  ngOnInit() {
  }

  changeUser() {
    //this.changeFriend.user.next(this.user);
  }
}
