import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FileManagerService } from '../services/file-manager.service';
import { ChangeChatService } from '../services/change-chat.service';
import { Subject } from 'rxjs';
import { RdfService } from '../services/rdf.service';
import { WindowService } from '@ng-select/ng-select/ng-select/window.service';

declare var $: any;

@Component({
	selector: 'app-chat',
	templateUrl: './chat.component.html',
	styleUrls: [ './chat.component.css' ]
})
export class ChatComponent implements OnInit {
	chat: any;
	newGroupName: String;
	userListPopup;

	@ViewChild('f') chatForm: NgForm;
	@ViewChild('scroller') scrollPane: ElementRef;
	tempSelected;

	constructor(private fileManager: FileManagerService, private changeFriend: ChangeChatService) {}

	async ngOnInit() {
		this.changeFriend.chat.subscribe(async (res) => {
			this.chat = res;
			if (this.chat != null) {
				await this.loadMessages();
				this.addListener(this.chat, this.fileManager);
			}
		});
		await this.loadFriends();
		this.searchField();
	}
	clearSearch() {
	
		var searchBox = $('#searchBox')[0];
		searchBox.value = '';

		var elements = $('.userLabel');

		for (var i = 0; i < elements.length; i++) {
			var parent: HTMLDivElement = elements[i].parentElement;
			parent.hidden = false;
			if (parent.classList.contains('checked')) {
				parent.classList.remove('checked');
				parent.getElementsByTagName('input')[0].checked = false;
			}
		}
	
	}
	checkboxClick(event) {
		var element: HTMLElement = event.target;

		if (element.tagName != 'DIV') {
			element = element.parentElement;
		}

		if (element.classList.contains('chooserItem')) {
			if (element.classList.contains('checked')) {
				element.classList.remove('checked');
				element.getElementsByTagName('input')[0].checked = false;
			} else {
				element.classList.add('checked');
				element.getElementsByTagName('input')[0].checked = true;
			}
		}
	}
	searchField() {
		var searchBox = $('#searchBox');
		var chat = this;

		this.clearSearch();

		searchBox.keyup(function() {
			var dInput: string = this.value;

			if (dInput === null || dInput.match(/^ *$/) !== null) {
				var elements = $('.userLabel');

				for (var i = 0; i < elements.length; i++) {
					elements[i].parentElement.hidden = false;
				}
			} else {
				var elements = $('label');
				for (var i = 0; i < elements.length; i++) {
					var el: HTMLLabelElement = elements[i];
					if (el.textContent.toLowerCase().includes(dInput.toLowerCase())) {
						el.parentElement.hidden = false;
					} else {
						el.parentElement.hidden = true;
					}
				}
			}
		});
	}

	async addListener(chat, fm) {
		let direction = chat.direction + '/index.ttl';
		let directionForSocket = 'wss' + direction.split('https')[1];

		let socket = new WebSocket(directionForSocket);

		socket.onopen = function() {
			this.send('sub ' + direction);
		};

		socket.onmessage = function(msg) {
			if (msg.data && msg.data.slice(0, 3) === 'pub') {
				fm.getLastMessage(chat.messages, chat.direction);
			}
		};
	}

	async onSubmit() {
		if (this.chat != null) {
			var message = (<HTMLInputElement>document.getElementById('inputMessage')).value;
			let direction = this.chat.direction + '/index.ttl';
			await this.fileManager.sendMessage(message, direction, this.chat.messages).then((e) => {
				(<HTMLInputElement>document.getElementById('inputMessage')).value = '';
			});
		}
	}

	async loadFriends() {
		this.userListPopup = [];
		await this.fileManager.getFriends(this.userListPopup);
	}

	private async loadMessages() {
		this.chat.messages = [];
		await this.fileManager.getMessages(this.chat.messages, this.chat.direction);
	}

	createNewChat() {
		var checkBoxes = document.querySelectorAll('input[type=checkbox]:checked');
		//console.log(this.dummyusers);
		var selected = [];
		for (var i = 0; i < checkBoxes.length; i++) {
			var id = checkBoxes[i].id;
			for (var j = 0; j < this.userListPopup.length; j++) {
				if (this.userListPopup[j].id == id) {
					selected.push(this.userListPopup[j]);
				}
			}

			//Reset checkboxes for the next time appear unchecked
			(<HTMLInputElement>(<any>checkBoxes[i])).checked = false;
			// filemanager.addChatToIndex(chat, webId)
		}

		if (selected.length == 0) {
			console.log('Cerrando, no se han seleccionado usuarios');
		} else if (selected.length < 2) {
			$('#groupNameDialog').modal('hide');

			this.createSingleUserChat(selected);
		} else {
			$('#groupNameDialog').modal('show');
			this.tempSelected = selected;
		}
	}

	createGroupChat(users, name): any {
		this.fileManager.createChat(users, name);
	}

	createSingleUserChat(users): any {
		let name = users[0].id.split('://')[1].split('.')[0];
		this.fileManager.createChat(users, name);
	}

	addGroupName() {
		var field = $('#groupNameField');

		var name = field[0].value;
		field.value = '';
		this.createGroupChat(this.tempSelected, name);
	}

	addFriend() {
		var field = $('#newFriendField');
		var friendId = field[0].value;
		field.value = '';
		this.fileManager.addFriend(friendId);
		this.loadFriends();
	}
}
