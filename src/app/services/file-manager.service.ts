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

    async createRootFolder() {
        await fileManager.popupLogin().then((webId) => {
            console.log('Logged in as ' + webId);
            this.createSoleFolder(webId);
        });
    }

    async createSoleFolder(webId) {
        let direction = webId.split("/profile")[0] + "/public/Sole";
        await fileManager.readFile(direction).then((body) => {
            console.log("Reading Sole folder");
        },
        async (err) => {
            if (err.includes('Not Found')) {
                await fileManager.createFolder(direction).then(success => {
                    console.log(`Created folder ${direction}.`);
                    this.createACLSole(direction, webId);
                    this.createChatIndex(direction);
                }, err => console.log(err) );
            } else {
                console.log(err);
            }
        });
    }

    async createACLSole(direction, webId) {
        let file = direction + '/.acl';
        let content = '@prefix acl: <http://www.w3.org/ns/auth/acl#>. \n' +
        '@prefix foaf: <http://xmlns.com/foaf/0.1/>. \n' +
        ':AppendRead \n' +
        'a acl:Authorization; \n' + 
        'acl:agentClass foaf:Agent;\n' + 
        'acl:accessTo <' + direction + '/>; \n' + 
        'acl:defaultForNew <./>; \n' + 
        'acl:mode acl:Append, acl:Read. \n' +
        ':ControlReadWrite \n' +
        'a acl:Authorization; \n' + 
        'acl:agent <' + webId + '>; \n' + 
        'acl:accessTo <' + direction + '/>; \n' + 
        'acl:defaultForNew <./>; \n' + 
        'acl:mode acl:Control, acl:Read, acl:Write. \n';

        await fileManager.createFile(file, content).then(
            (fileCreated) => {
                console.log(`Created file ${fileCreated}.`);
        });
    }

    async createChatIndex(direction) {
        let file = direction + '/chatsIndex.ttl';
        let content = "@prefix : <#>.\n";

        await fileManager.createFile(file, content).then(
            (fileCreated) => {
                console.log(`Created file ${fileCreated}.`);
        });
    }

    async sendMessage(message, direction, messages) {
        await fileManager.popupLogin().then((webId) => {
            console.log('Logged in as ' + webId);
        });

        await fileManager.readFile(direction).then(
            (body) => {
                this.updateFile(direction, message, messages);
            },
            (err) => {
                if (err.includes('Not Found')) {
                    this.createFile(direction, message, messages);
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
        let myPublicFolder = webId.split("/profile")[0] + "/public/Sole/Chat_" + myFriend;
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
        let friendsPublicFolder = friendId.split("/profile")[0] + "/public/Sole/Chat_" + myName;
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
        }, err => console.log(err));

        this.createACLChat(webId, folder, friendId);
    }

    async createACLChat(webId, folder, friendId) {
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

    async createFile(direction, message, messages) {
        var baseContent = "@prefix : <#>.\n";
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
                this.updateFile(direction, message, messages);
            },
            (err) => {
                console.log(err);
            }
        );
    }

    async updateFile(direction, message, messages) {
        await this.rdf.createMessage(message, messages, direction);
    }

    async getMessages(displayedMessages, friendID) {
        let direction = await this.getDirection(friendID) + "/index.ttl";

        await fileManager.popupLogin().then((webId) => {
            this.rdf.getMessages(displayedMessages, direction);
        });
    }

    async getFriends(users) {
        await fileManager.popupLogin().then((webId) => {
            this.rdf.getFriends(users);
        });
    }

    async getLastMessage(displayedMessages, friendID) {
        let direction = await this.getDirection(friendID) + "/index.ttl";

        await fileManager.popupLogin().then((webId) => {
            this.rdf.getLastMessage(displayedMessages, direction);
        });
    }

}


