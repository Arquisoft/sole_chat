import { Component, Input, OnInit } from '@angular/core';
import { ChangeChatService } from '../services/change-chat.service';
import { RdfService } from '../services/rdf.service';
import { FileManagerService } from '../services/file-manager.service';

@Component({
	selector: 'app-chatitem',
	templateUrl: './chatitem.component.html',
	styleUrls: [ './chatitem.component.css' ]
})
export class ChatitemComponent implements OnInit {
	@Input() chat;
	lastMessage: string = null;
	newMessagesCount: number = 0;
	constructor(
		private changeChat: ChangeChatService,
		private rdf: RdfService,
		private fileManager: FileManagerService
	) {}

	ngOnInit() {
		this.addNotificationsListener();
	}

	changeUser() {
		this.changeChat.chat.next(this.chat);
		this.lastMessage = null;
		this.newMessagesCount = 0;
	}

	async addNotificationsListener() {
		let direction = this.chat.direction + '/index.ttl';
		let directionForSocket = 'wss' + direction.split('https')[1];

		let socket = new WebSocket(directionForSocket);

		socket.onopen = function() {
			this.send('sub ' + direction);
		};
		var chatitem = this;

		socket.onmessage = function(msg) {
			if (msg.data && msg.data.slice(0, 3) === 'pub') {
				//aqui seria mejor controlar que no este el chat abierto para añadir el nuevo mensaje

				chatitem.lastMessage = 'New messages';
				chatitem.newMessagesCount++;
			}
		};
	}
}
