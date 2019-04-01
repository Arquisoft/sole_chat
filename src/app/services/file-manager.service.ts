import {Injectable} from '@angular/core';
import * as fileManager from 'solid-file-client';
import {componentNeedsResolution} from '@angular/core/src/metadata/resource_loading';
import {RdfService} from './rdf.service';

@Injectable({
    providedIn: 'root'
})

export class FileManagerService {
    constructor(private rdf: RdfService) {
    }

    async sendMessage(message, friendId, messages) {
        let direction;
        await fileManager.popupLogin().then((webId) => {
            console.log('Logged in as ' + webId);
        });

        direction = await this.getDirection(friendId) + "/messages.ttl";

        await fileManager.readFile(direction).then(
            (body) => {
                this.updateFile(body, direction, message, messages);
            },
            (err) => {
                if (err.includes('Not Found')) {
                    this.createFile(direction, message, friendId, messages);
                } else {
                    console.log(err);
                }
            }
        );
    }

    async getDirection(friendId) {
        let webId;
        await fileManager.popupLogin().then((id) => {
            console.log('Logged in as ' + id);
            webId = id;
        });

        let myFriend = (friendId.split("://")[1]).split(".")[0];
        let myPublicFolder = webId.split("/profile")[0] + "/public/Chat_" + myFriend;
        let direction;

        await fileManager.readFolder(myPublicFolder).then(folder => {
            console.log('Read ' + folder.name + ', it has ' + folder.files.length + ' files.');
            direction = myPublicFolder;
        }, (err) => {
            if (err.includes('Not Found')) {
                direction = this.lookInFriendsFolder(webId, friendId, myPublicFolder);
            } else {
                console.log(err);
            }
        });

        return direction;
    }

    async lookInFriendsFolder(webId, friendId, myPublicFolder) {
        let myName = (webId.split("://")[1]).split(".")[0];
        let friendsPublicFolder = friendId.split("/profile")[0] + "/public/Chat_" + myName;
        let direction;

        await fileManager.readFolder(friendsPublicFolder).then(folder => {
            console.log('Read ' + folder.name + ', it has ' + folder.files.length + ' files.');
            direction = friendsPublicFolder;
        }, (err) => {
            if (err.includes('Not Found')) {
                this.createFolder(webId, myPublicFolder, friendId);
                direction = myPublicFolder;
            } else {
                console.log(err);
            }
        });

        return direction;
    }

    async createFolder(webId, folder, friendId) {
        await fileManager.createFolder(folder).then(success => {
            console.log(`Created folder ${folder}.`);
        }, err => console.log(err) );

        this.createACLfile(webId, folder, friendId);
    }

    async createACLfile(webId, folder, friendId) {
        let file = folder + '/.acl';
        let content = '@prefix acl: <http://www.w3.org/ns/auth/acl#>. \n' +
        ':ControlReadWrite \n' +
        'a acl:Authorization; \n' + 
        'acl:agent <' + webId + '>; \n' + 
        'acl:agent <' + friendId + '>; \n' + 
        'acl:accessTo <' + folder + '/>; \n' + 
        'acl:defaultForNew <./>; \n' + 
        'acl:mode acl:Control, acl:Read, acl:Write.';

        await fileManager.createFile(file, content).then(
            (fileCreated) => {
                console.log(`Created file ${fileCreated}.`);
            });

    }

    async createFile(direction, message, friendId, messages) {
        var baseContent = await this.generateBaseTurtle();
        let permissions = direction + '.acl';

        await fileManager.createFile(permissions, '').then(
            (fileCreated) => {
                console.log(`Created file ${fileCreated}.`);
            }
        );

        await fileManager.createFile(direction, baseContent).then(
            (fileCreated) => {
                console.log(`Created file ${fileCreated}.`);
                this.rdf.generateBaseChat(direction);
            });

        await fileManager.readFile(direction).then(
            (body) => {
                this.updateFile(body, direction, message, messages);
            },
            (err) => {
                console.log(err);
            }
        );
    }

    async updateFile(body, direction, message, messages) {
        let content = await this.rdf.addMessage(body, message, messages, direction);
        await fileManager.updateFile(direction, content).then(
            (fileUpdated) => {
                console.log(`Updated file ${fileUpdated}.`);
            },
            (err) => console.log(err)
        );
    }

    async generateBaseTurtle() {
        let msg = "@prefix : <#>.\n";
        return msg;
    }

    async getMessages(displayedMessages, friendID) {
        let direction = await this.getDirection(friendID) + "/messages.ttl";

        await fileManager.popupLogin().then((webId) => {
            console.log('Logged in as ' + webId);
            this.rdf.getMessages(displayedMessages, direction);
        });
    }

    async getFriends(users) {
        await fileManager.popupLogin().then((webId) => {
            console.log('Logged in as ' + webId);
            this.rdf.getFriends(users);
        });
    }

}


