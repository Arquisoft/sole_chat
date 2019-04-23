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
	ownLastMessage:boolean=true;
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

		this.newMessagesCount = 0;
	}

	async addNotificationsListener() {
		this.updateLastMessage();
		let direction = this.chat.direction + '/index.ttl';
		let directionForSocket = 'wss' + direction.split('https')[1];

		let socket = new WebSocket(directionForSocket);

		socket.onopen = function() {
			this.send('sub ' + direction);
		};
		var chatitem = this;

		socket.onmessage = async function(msg) {
			if (msg.data && msg.data.slice(0, 3) === 'pub') {
				if (chatitem.changeChat.chat.getValue() != null) {
					if (chatitem.changeChat.chat.getValue().direction != chatitem.chat.direction) {
						chatitem.newMessagesCount++;
						await chatitem.updateLastMessage();
					} else {
						//else estas en el mismo chat
						await chatitem.updateLastMessage();
					}
				} else {
					chatitem.newMessagesCount++;
					await chatitem.updateLastMessage();
				}
			}
		};
	}

	updateLastMessage() {
		var updateLast = function(chatitem, mess) {
			//console.log(mess);
			const maxLength = 14;
			if (mess.content.length > maxLength) {
				chatitem.lastMessage = mess.content.substring(0, maxLength);
				chatitem.lastMessage+="...";
			} else {
				chatitem.lastMessage=mess.content
			}

			chatitem.ownLastMessage=!mess.received;

			console.log(mess)
			if(mess.isImage){
				chatitem.lastMessage="Image"
			}
			if(mess.isVideo){
				chatitem.lastMessage="Video"
			}
			if(mess.isDocument){
				chatitem.lastMessage="Document"
				
			}
		};
		this.rdf.getLastMessageValue(updateLast, this.chat.direction + '/index.ttl', this);
		/*this.lastMessage = 'New messages: ';
		this.newMessagesCount++;*/
	}
}
