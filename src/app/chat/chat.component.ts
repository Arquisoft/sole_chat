import {Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef} from '@angular/core';
import {NgForm} from '@angular/forms';
import {FileManagerService} from '../services/file-manager.service';
import {ChangeChatService} from '../services/change-chat.service';
import {RdfService} from '../services/rdf.service';
import {ToastrService} from 'ngx-toastr';
import {ChatlistComponent} from '../chatlist/chatlist.component';

declare var $: any;

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
    chat: any;
    newGroupName: String;
    userListPopup;
    participants = [];

    @ViewChild('f') chatForm: NgForm;
    @ViewChild('scroller') scrollPane: ElementRef;
    @ViewChild('videoPlayer') videoplayer: ElementRef;
    @ViewChild('chatList') chatList: ChatlistComponent;

    tempSelected;

    constructor(
        private fileManager: FileManagerService,
        private changeFriend: ChangeChatService,
        private rdf: RdfService,
        private toastr: ToastrService,
    ) {
    }

    async ngOnInit() {
        await this.loadFriends();
        this.searchField('#searchBox');
        this.searchField('#searchBoxParticipant');
        this.searchChat();

        this.addNotificationsListener();
        this.chatList.addListener();

        this.changeFriend.chat.subscribe(async (res) => {
            this.chat = res;
            if (this.chat != null) {
                await this.loadMessages();
                this.addListener(this.chat, this.fileManager);
                if (this.chat.isGroup) {
                    await this.loadParticipants();
                }
            }
        });
    }

    searchChat() {
        var searchBox = $('#searchBoxRecentChats');

        searchBox.keyup(function () {
            var dInput: string = this.value;
            if (dInput === null || dInput.match(/^ *$/) !== null) {
                var chatItems: HTMLDivElement[] = $('.chatName');
                for (var i = 0; i < chatItems.length; i++) {
                    chatItems[i].parentElement.parentElement.parentElement.hidden = false;
                }
            } else {

                var chatItems: HTMLDivElement[] = $('.chatName');
                for (var i = 0; i < chatItems.length; i++) {
                    var chatName: string = chatItems[i].innerHTML;
                    if (chatName.toLowerCase().includes(dInput.toLowerCase())) {
                        chatItems[i].parentElement.parentElement.parentElement.hidden = false;

                    } else {
                        chatItems[i].parentElement.parentElement.parentElement.hidden = true;

                    }
                }
            }
        });
    }

    clearSearch(id) {
        var searchBox = $(id)[0];
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

    searchField(id) {
        var searchBox = $(id);
        this.clearSearch(id);

        searchBox.keyup(function () {
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

        socket.onopen = function () {
            this.send('sub ' + direction);
        };

        var chatComp = this;
        socket.onmessage = function (msg) {
            if (msg.data && msg.data.slice(0, 3) === 'pub') {
                fm.getLastMessage(chat.messages, chat.direction);
                chatComp.checkBuzz();
            }
        };
    }

    checkBuzz() {
        var updateLast = function (chatComp, mess) {
            if (mess.content === 'BUZZZZZ') {
                if (mess.received) {
                    var chat: HTMLDivElement = $('#currentChat')[0];
                    chat.classList.add('buzzing');
                    setTimeout(function () {
                        chat.classList.remove('buzzing');
                    }, 2000);
                }
            }
        };
        this.rdf.getLastMessageValue(updateLast, this.chat.direction + '/index.ttl', this);
    }

    async onSubmit() {
        if (this.chat != null) {
            var message = (<HTMLInputElement>document.getElementById('inputMessage')).value;
            let direction = this.chat.direction + '/index.ttl';

            if (message != '') {
                await this.fileManager.sendMessage(message, direction).then((e) => {

                    (<HTMLInputElement>document.getElementById('inputMessage')).value = '';

                });
            }
        }
    }

    async sendBuzz() {
        var message = 'BUZZZZZ';
        let direction = this.chat.direction + '/index.ttl';
        await this.fileManager.sendMessage(message, direction);
    }

    async loadFriends() {
        this.userListPopup = [];
        await this.fileManager.getFriends(this.userListPopup);
    }

    private async loadMessages() {
        this.chat.messages = [];
        await this.fileManager.getMessages(this.chat.messages, this.chat.direction);
    }

    private async loadParticipants() {
        this.participants = [];
        await this.rdf.loadParticipants(this.chat.direction, this.participants);
    }

    createNewChat() {
        var checkBoxes = document.querySelectorAll('input[type=checkbox]:checked');
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
        }

        if (selected.length == 0) {
            //console.log('Cerrando, no se han seleccionado usuarios');
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

    async createSingleUserChat(users) {
        let name = users[0].id.split('://')[1].split('.')[0];
        let exists = false;
        await this.rdf.lookForChat(users[0].id, (exists) => {
            if (exists) {
                this.toastr.error('You already have a one-to-one chat with ' + users[0].id);
            } else {
                this.toastr.info('You have created a new chat with ' + users[0].id);
                this.fileManager.createChat(users, name);
            }
        });
    }

    addGroupName() {
        var field = $('#groupNameField');

        var name = field[0].value;
        field.value = '';
        if (name != '') {
            this.createGroupChat(this.tempSelected, name);
        } else {
            this.toastr.error('The name of the group must not be empty', 'Incorrect input');
        }
    }

    addFriend() {
        var field = $('#newFriendField');
        var friendId = field[0].value;
        field.value = '';
        this.fileManager.addFriend(friendId);
        this.loadFriends();
    }

    async readNotifications() {
        await this.fileManager.getChatNotifications();
    }

    async addNotificationsListener() {
        const webId = await this.rdf.getWebID();
        const direction = webId.split('/profile')[0] + '/inbox/';
        const directionForSocket = 'wss' + direction.split('https')[1];

        const socket = new WebSocket(directionForSocket);
        let fm = this.fileManager;

        socket.onopen = function () {
            this.send('sub ' + direction);
            //console.log('Listening for ' + direction);
        };

        socket.onmessage = function (msg) {
            if (msg.data && msg.data.slice(0, 3) === 'pub') {
                fm.getChatNotifications();
            }
        };
    }

    async addParticipants() {
        var checkBoxes = document.querySelectorAll('input[type=checkbox]:checked');
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
        }

        if (selected.length != 0) {
            this.rdf.addParticipants(this.chat.direction, selected);
        }
    }

    async sendImages() {
        const fileInput = <HTMLInputElement>document.getElementById('sendImages');
        const files = fileInput.files;
        this.fileManager.sendMultimedia(this.chat.direction, files);
    }

    async sendVideos() {
        const fileInput = <HTMLInputElement>document.getElementById('sendVideos');
        const files = fileInput.files;
        this.fileManager.sendMultimedia(this.chat.direction, files);
    }

    toggleVideo(event: any) {
        this.videoplayer.nativeElement.play();
    }

    async sendDocs() {
        const fileInput = <HTMLInputElement>document.getElementById('sendDocs');
        const files = fileInput.files;
        this.fileManager.sendMultimedia(this.chat.direction, files);
    }

    changeGroupName() {
        var field = $('#changeNameField');

        var name = field[0].value;
        field.value = '';
        if (name != '') {
            this.rdf.updateChatName(this.chat.direction, name, (success) => {
                if (success) {
                    this.chatList.getChatList();
                    this.chat = null;
                    this.toastr.info('The name of the group has been changed successfully', 'Name changed');
                } else {
                    this.toastr.error('The name of the group could not be changed', 'Error');
                }
            });

        } else {
            this.toastr.error('The name of the group must not be empty', 'Incorrect input');
        }
    }

    changeGroupImage() {
        const fileInput = <HTMLInputElement>document.getElementById('groupImage');
        const file = fileInput.files[0];
        this.fileManager.addGroupPhoto(this.chat.direction, file, (success) => {
            if (success) {
                this.chatList.getChatList();
                this.chat = null;
                this.toastr.info('The photo of the group has been changed successfully', 'Photo changed');
            } else {
                this.toastr.error('The photo of the group could not be changed', 'Error');
            }
        });

    }
}
