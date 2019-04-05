import { Injectable } from '@angular/core';
import * as fileManager from 'solid-file-client';
import { componentNeedsResolution } from '@angular/core/src/metadata/resource_loading';
import { RdfService } from './rdf.service';

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
        let direction = webId.split('/profile')[0] + '/public/Sole';
        await fileManager.readFile(direction).then((body) => {
            console.log('Reading Sole folder');
        },
            async (err) => {
                if (err.includes('Not Found')) {
                    await fileManager.createFolder(direction).then(success => {
                        console.log(`Created folder ${direction}.`);
                        this.createACLSole(direction, webId);
                        this.createChatIndex(direction);
                    }, err => console.log(err));
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
        let content = '@prefix : <#>.\n';

        await fileManager.createFile(file, content).then(
            (fileCreated) => {
                console.log(`Created file ${fileCreated}.`);
            });
    }

    async addChatToIndex(chat, webId) {
        const chatIndex = webId.split('/profile')[0] + '/public/Sole/chatsIndex.ttl';
        await fileManager.readFile(chatIndex).then(
            (body) => {
                this.updateChatIndex(chat, webId);
            },
            (err) => {
                if (err.includes('Not Found')) {
                    this.createChatIndex(webId);
                } else {
                    console.log(err);
                }
            }
        );
    }

    async updateChatIndex(chat, webId) {
        this.rdf.updateChatIndex(chat, webId);
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
                console.log(err);
            }
        );
    }

    async createFolder(webId, folder, friends, photo) {
        await fileManager.readFolder(folder).then(folder => { }, async err => {
            if (err.includes('Not Found')) {
                await fileManager.createFolder(folder).then(success => {
                    this.createACLChat(webId, folder, friends);
                    this.createFile(folder + '/index.ttl', photo);
                }, err => console.log(err));
            } else {
                console.log(err);
            }
        });
    }

    async createACLChat(webId, folder, friends) {
        let file = folder + '/.acl';
        let content = '@prefix acl: <http://www.w3.org/ns/auth/acl#>. \n' +
            ':ControlReadWrite \n' +
            'a acl:Authorization; \n' +
            'acl:agent <' + webId + '>; \n';
        for (let i = 0; i < friends.length; i++) {
            content += 'acl:agent <' + friends[i].webId + '>; \n';
        }
        content +=
            'acl:accessTo <' + folder + '/>; \n' +
            'acl:defaultForNew <./>; \n' +
            'acl:mode acl:Control, acl:Read, acl:Write.';

        await fileManager.createFile(file, content).then(
            (fileCreated) => {
                console.log(`Created file ${fileCreated}.`);
            });
    }

    async createFile(direction, photo) {
        var baseContent = '@prefix : <#>.\n';

        await fileManager.createFile(direction, baseContent).then(
            (fileCreated) => {
                this.rdf.generateBaseChat(direction, photo);
        });
    }

    async updateFile(direction, message, messages) {
        await this.rdf.createMessage(message, messages, direction);
    }

    async getMessages(displayedMessages, chatDirection) {
        let direction = chatDirection + '/index.ttl';

        await fileManager.popupLogin().then((webId) => {
            this.rdf.getMessages(displayedMessages, direction);
        });
    }

    async getFriends(users) {
        await fileManager.popupLogin().then((webId) => {
            this.rdf.getFriends(users);
        });
    }

    async getLastMessage(displayedMessages, chatDirection) {
        let direction = chatDirection + '/index.ttl';

        await fileManager.popupLogin().then((webId) => {
            this.rdf.getLastMessage(displayedMessages, direction);
        });
    }

    async createChat(users: any, name: any) {
        await fileManager.popupLogin().then((id) => {
            const direction = id.split('/profile')[0] + '/public/Sole/Chat_' + name;
            let photo = 'https://avatars.servers.getgo.com/2205256774854474505_medium.jpg';
            if (users.lenght == 1) {
                photo = users[0].img;
            }

            this.createFolder(id, direction, users, photo);
            this.addChatToIndex(direction, id);
            for (let i = 0; i < users.length; i++) {
                console.log("Updating chat index for " + users[i].username);
                this.addChatToIndex(direction, users[i].id);
            }

        });
    }

    async getActiveChats(chats) {
        await fileManager.popupLogin().then((webId) => {
            this.rdf.getActiveChats(chats);
        });
    }
}


