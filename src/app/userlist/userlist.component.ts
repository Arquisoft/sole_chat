import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  dummyusers = [
    { username: 'user1', status: 'online', id: 20055 },
    { username: 'user2', status: 'offline', id: 20053 },
    { username: 'user3', status: 'online', id: 45652 }
];
  constructor() { }

  ngOnInit() {
  }

}
