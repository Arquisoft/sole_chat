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
            this.createNotificationsFile(webId);
        });
    }

    async createSoleFolder(webId) {
        let direction = webId.split('/profile')[0] + '/public/Sole';
        await fileManager.readFolder(direction).then((body) => {
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

    async createNotificationsFile(webId) {
        let notificationsDirection = webId.split('/profile')[0] + '/inbox/sole_notifications.ttl';
        await fileManager.readFile(notificationsDirection).then((body) => { },
            async (err) => {
                if (err.includes('Not Found')) {
                    let content = '@prefix : <#>.\n';
                    await fileManager.createFile(notificationsDirection, content).then(
                        (fileCreated) => {
                            console.log(`Created file ${fileCreated}.`);
                        });
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

    async addChatNotification(chatDirection, friendId) {
        await fileManager.popupLogin().then(async (webId) => {
            if (friendId != webId) {
                let direction = friendId.split('/profile')[0] + '/inbox/soleChatNot' + Date.now() + '.ttl';
                let content = '@prefix : <#>.\n' +
                    '@prefix prov: <https://www.w3.org/ns/prov#>.\n' +
                    ':this prov:Create <' + chatDirection + '>; \n' +
                    'prov:Creator <' + webId + '>.';

                await fileManager.createFile(direction, content).then(
                    (fileCreated) => { });
            }
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

    async sendMessage(message, direction) {
        await fileManager.popupLogin().then((webId) => {
            console.log('Logged in as ' + webId);
        });

        await fileManager.readFile(direction).then(
            (body) => {
                this.rdf.createMessage(message, direction);
            },
            (err) => {
                console.log(err);
            }
        );
    }

    async createFolderForChat(webId, folder, friends, chatName) {
        await fileManager.readFolder(folder).then(folder => {
        }, async err => {
            if (err.includes('Not Found')) {
                await fileManager.createFolder(folder).then(success => {
                    this.createACLChat(webId, folder, friends);
                    this.createFileForChat(folder + '/index.ttl', friends, chatName);
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
            content += 'acl:agent <' + friends[i].id + '>; \n';
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

    async createFileForChat(direction, friends, chatName) {
        var baseContent = '@prefix : <#>.\n';

        await fileManager.createFile(direction, baseContent).then(
            (fileCreated) => {
                this.rdf.generateBaseChat(direction, friends, chatName);
            });
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

    async createChat(users: any, name: any, functionCallback) {
        await fileManager.popupLogin().then((id) => {
            const direction = id.split('/profile')[0] + '/public/Sole/Chat' + Date.now();
            this.createFolderForChat(id, direction, users, name);
            this.addChatToIndex(direction, id);
            for (let i = 0; i < users.length; i++) {
                this.addChatToIndex(direction, users[i].id);
                this.addChatNotification(direction, users[i].id);
            }
        });
        functionCallback();
    }

    async getActiveChats(chats) {
        this.rdf.getActiveChats(chats);
    }

    async addFriend(friendId) {
        this.rdf.addFriend(friendId);
    }

    async getChatNotifications() {
        await fileManager.popupLogin().then(async (id) => {
            let names = [];
            let direction = id.split('/profile')[0] + '/inbox';
            await fileManager.readFolder(direction).then(folder => {
                for (let i = 0; i < folder.files.length; i++) {
                    let name = folder.files[i].name;
                    if (name.startsWith("soleChatNot")) {
                        names.push(name);
                    }
                }
                this.rdf.getChatNotifications(names, this);
            }, err => console.log(err));
        }, (err) => { console.log(err) });
    }

    async deleteFile(direction) {
        fileManager.deleteFile(direction).then(success => {
            console.log(`Deleted ${direction}.`);
        }, err => console.log(err));
    }

    async sendMultimedia(direction, files) {
        fileManager.popupLogin().then(async () => {
            for (let i = 0; i < files.length; i++) {
                let name = files[i].name.replace(" ", "_");
                let URI = direction + '/' + name;
                let content = files[i];
                await fileManager.updateFile(URI, content).then(res => {
                    this.rdf.createMessageForMultimedia(URI, direction + '/index.ttl');
                }, err => { console.log("upload error : " + err) });
            }
        }, err => { console.log("login error : " + err) });
    }

    async addGroupPhoto(direction, file, funcCallback) {
        fileManager.popupLogin().then(async () => {
            let name = file.name.replace(" ", "_");
            let URI = direction + '/' + name;
            await fileManager.updateFile(URI, file).then(res => {
                this.rdf.addPhotoToChat(URI, direction + '/index.ttl', funcCallback);
            }, err => { console.log("upload error : " + err) });

        }, err => { console.log("login error : " + err) });
    }

    async addParticipants(chatDirection, friends, funcCallback) { 
        this.updateFriendsIndexes(chatDirection, friends);
        this.rdf.addParticipants(chatDirection, friends, function(success) {
            if (success) {
                funcCallback(true);
            } else {
                funcCallback(false);
            }
        });
    }

    async updateFriendsIndexes(chatDirection, friends) {
        console.log("Updating friends indexes");
        for (let i = 0; i < friends.length; i++) {
            this.addChatToIndex(chatDirection, friends[i].id);
            this.addChatNotification(chatDirection, friends[i].id);
        }
    }
}


