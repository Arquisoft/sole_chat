import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {NgForm} from '@angular/forms';
import {FileManagerService} from '../services/file-manager.service';
import {ChangeChatService} from '../services/change-chat.service';
import {Subject} from 'rxjs';
import {RdfService} from '../services/rdf.service';
import {WindowService} from '@ng-select/ng-select/ng-select/window.service';

declare var $:any;


//Methods defined in js files
declare function createFolder(path, folder): any;

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
    user: any;
    public messages: Subject<null>;
  newGroupName:String;
    userListPopup;

    @ViewChild('f') chatForm: NgForm;
    @ViewChild('scroller') scrollPane: ElementRef;
  tempSelected;

    constructor(private fileManager: FileManagerService, private changeFriend: ChangeChatService,
                private rdf: RdfService) {

    }

    ngOnInit() {
        this.loadUserList();
        this.changeFriend.user.subscribe(async res => {
            this.user = res;
            if (this.user != null) {
                this.loadMessages();
                this.addListener(this.user, this.fileManager);
            }
        });
    }

    async addListener(user, fm) {
        let direction = await this.fileManager.getDirection(this.user.id) + '/index.ttl';
        let directionForSocket = 'wss' + direction.split('https')[1];

        let socket = new WebSocket(directionForSocket);

        socket.onopen = function () {
            this.send('sub ' + direction);
        };

        socket.onmessage = function (msg) {
            if (msg.data && msg.data.slice(0, 3) === 'pub') {
                fm.getLastMessage(user.messages, user.id);
            }
        };
    }

    async onSubmit() {
        if (this.user != null) {
            var message = (<HTMLInputElement>document.getElementById('inputMessage')).value;
            let direction = await this.fileManager.getDirection(this.user.id) + '/index.ttl';
            await this.fileManager.sendMessage(message, direction, this.user.messages).then(e => {
                (<HTMLInputElement>document.getElementById('inputMessage')).value = '';
            });

        }
    }

    async loadUserList() {
        this.userListPopup = [];
        await this.fileManager.getFriends(this.userListPopup);
    }

    private async loadMessages() {
        this.user.messages = [];
        await this.fileManager.getMessages(this.user.messages, this.user.id);
    }

    createNewChat() {
        console.log('Creando chat');
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
            (<HTMLInputElement><any>checkBoxes[i]).checked = false;
            // filemanager.addChatToIndex(chat, webId)
        }


        if (selected.length == 0) {
            console.log('Cerrando, no se han seleccionado usuarios');
        } else if (selected.length < 2) {
            this.createSingleUserChat(selected);
        } else {
            this.createGroupChat(selected, 'Nuevo Grupo');
        }


    }

    createGroupChat(users, name): any {
        console.log('Ana crea el grupo para:');
        console.log(users);
        this.fileManager.createChat(users, name);
    }
    else if(selected.length<2){
      $('#groupNameDialog').modal('hide');
      
      this.createSingleUserChat(selected[0]);
    }else{
      $("#groupNameDialog").modal('show');
      this.tempSelected=selected;
      //this.createGroupChat(selected);

    createSingleUserChat(users): any {
        console.log('Ana crea el chat para:');
        console.log(users);
        this.fileManager.createChat(users, users[0].username);
    }
    
 
  }

  addGroupName(){
    var field=$("#groupNameField");

    var name=field[0].value;
    field.value="";
    this.createGroupChat(this.tempSelected,name);
  }
}
