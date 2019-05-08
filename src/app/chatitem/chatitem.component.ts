import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ChangeChatService } from '../services/change-chat.service';
import { RdfService } from '../services/rdf.service';
import { FileManagerService } from '../services/file-manager.service';

declare var $: any;
@Component({
	selector: 'app-chatitem',
	templateUrl: './chatitem.component.html',
	styleUrls: [ './chatitem.component.css' ]
})
export class ChatitemComponent implements OnInit {
	@ViewChild("app-chatitem") el:ElementRef;
	@Input() chat;
	lastMessage: string = null;
	newMessagesCount: number = 0;
	ownLastMessage:boolean=true;
	buzzing:boolean=false;
	constructor(
		private changeChat: ChangeChatService,
		private rdf: RdfService,
		private fileManager: FileManagerService
	) {}

	ngOnInit() {
		this.addNotificationsListener();
		$(".userItem").mouseleave(function(){
			$(".dropdown-menu").removeClass("show")//para que desaparezca el dropdown cuando se va el raton
		
		  });
	}

	changeUser() {
		this.changeChat.chat.next(this.chat);

		this.newMessagesCount = 0;
	}

	async addNotificationsListener() {
		this.updateLastMessage(true);
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

	updateLastMessage(firstUpdate:boolean=false) {
	
		var updateLast = function(chatitem, mess) {
			const maxLength = 14;
			if (mess.content.length > maxLength) {
				chatitem.lastMessage = mess.content.substring(0, maxLength);
				chatitem.lastMessage+="...";
			} else {
				chatitem.lastMessage=mess.content
			}

			chatitem.ownLastMessage=!mess.received;

		
			if(mess.isImage){
				chatitem.lastMessage="Image"
			}
			if(mess.isVideo){
				chatitem.lastMessage="Video"
			}
			if(mess.isDocument){
				chatitem.lastMessage="Document"
				
			}


			if(!firstUpdate){
			if(mess.content==="BUZZZZZ"){
				
				if(mess.received){
					
					chatitem.buzzing=true;
								
					setTimeout(function() {
						chatitem.buzzing=false;
					}, 2000);
				}
			}}
		};
		this.rdf.getLastMessageValue(updateLast, this.chat.direction + '/index.ttl', this);


		
		/*this.lastMessage = 'New messages: ';
		this.newMessagesCount++;*/
	}

	deleteChat(event){
		event.stopPropagation();
		console.log("deleting chat")
	}

	leaveGroup(event){
		event.stopPropagation();
		this.rdf.leaveGroup(this.chat.direction);
	}

}
