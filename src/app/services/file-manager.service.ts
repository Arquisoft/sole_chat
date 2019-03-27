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

    async saveSomethingInThePOD(message, friendId, messages) {
        let direction;
        let id;
        await fileManager.popupLogin().then((webId) => {
            console.log('Logged in as ' + webId);
            id = webId;
        });

        direction = await this.getDirection(id, friendId) + "/messages.ttl";

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

    async getDirection(webId, friendId) {
        let myFriend = (friendId.split("://")[1]).split(".")[0];
        let myPublicFolder = webId.split("/profile")[0] + "/public/chat-" + myFriend;
        let direction;

        await fileManager.readFolder(myPublicFolder).then(folder => {
            console.log(`Read ${folder.name}, it has ${folder.files.length} files.`);
            direction = myPublicFolder;
        }, (err) => {
            if (err.includes('Not Found')) {
                direction = this.lookInFriendsFolder(webId, friendId, myPublicFolder);
            } else {
                console.log(err);
            }
        });

        await fileManager.createFile(direction + '/.acl', '').then(
            (fileCreated) => {
                console.log(`Created file ${fileCreated}.`);
            });
        let permissions = await this.rdf.givePermissionsToFolder(direction + '/.acl', friendId);
        await fileManager.updateFile(direction + '/.acl', permissions).then(
            (fileUpdated) => {
                console.log(`Updated file ${fileUpdated}.`);
                console.log(permissions);
            },
            (err) => console.log(err)
        );

        return direction;
    }

    async lookInFriendsFolder(webId, friendId, myPublicFolder) {
        let myName = (webId.split("://")[1]).split(".")[0];
        let friendsPublicFolder = friendId.split("/profile")[0] + "/public/chat-" + myName;
        let direction;

        await fileManager.readFolder(friendsPublicFolder).then(folder => {
            console.log(`Read ${folder.name}, it has ${folder.files.length} files.`);
            direction = friendsPublicFolder;
        }, (err) => {
            if (err.includes('Not Found')) {
                this.createFolder(myPublicFolder, friendId);
                direction = myPublicFolder;
            } else {
                console.log(err);
            }
        });

        return direction;
    }

    async createFolder(folder, friendId) {
        await fileManager.createFolder(folder).then(success => {
            console.log(`Created folder ${folder}.`);
        }, err => console.log(err) );
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
                this.rdf.generateBaseChat(friendId, direction);
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

    async retrieveLastMessage() {
        var direction;

        await fileManager.popupLogin().then((webId) => {
            direction = webId.split('/profile')[0] + '/public/messages.ttl';
        });

        var lastMessage;
        await fileManager.readFile(direction).then(
            (body) => {
                lastMessage = this.rdf.getLastMessage();
            },
            (err) => {
                console.log(err);
            }
        );

        return lastMessage;
    }

    async generateBaseTurtle() {
        let msg = "@prefix : <#>.\n";
        return msg;
    }
}
