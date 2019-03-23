import { Injectable } from '@angular/core';
import * as fileManager from 'solid-file-client';
import { componentNeedsResolution } from '@angular/core/src/metadata/resource_loading';
import { RdfService } from './rdf.service';

@Injectable({
	providedIn: 'root'
})

export class FileManagerService {
	constructor(private rdf: RdfService) { }

	async saveSomethingInThePOD(message, friend) {
		let direction: String;

		await fileManager.popupLogin().then((webId) => {
			console.log('Logged in as ' + webId);
			direction = webId.split("/profile")[0] + "/public/messages.ttl";
		});

		await fileManager.readFile(direction).then(
			(body) => {
				this.updateFile(body, direction, message);
			},
			(err) => {
				if (err.includes("Not Found")) {
					this.createFile(direction, message, friend);
				} else {
					console.log(err)
				}

			}
		);
	}

	async createFile(direction, message, friend) {
		var baseContent = await this.generateBaseTurtle(friend);
		let permissions = direction + ".acl";

		await fileManager.createFile(permissions, "").then(
			(fileCreated) => {
				console.log(`Created file ${fileCreated}.`);
			}
		);

		await fileManager.createFile(direction, baseContent).then(
			(fileCreated) => {
				console.log(`Created file ${fileCreated}.`);
				this.rdf.generateBaseChat(friend);
			});

		await fileManager.readFile(direction).then(
			(body) => {
				this.updateFile(body, direction, message);
			},
			(err) => {
				console.log(err);
			}
		);
	}

	async updateFile(body, direction, message) {
		//var object = JSON.parse(body);
		//object.messages.push(message);

		/*
		await fileManager.updateFile(direction, JSON.stringify(object)).then(
			(fileUpdated) => {
				console.log(`Updated file ${fileUpdated}.`);
			},
			(err) => console.log(err)
		);

		https://ajunque9.solid.community/public/messages.ttl
		*/
		let maker = direction.split("/public")[0] + "/profile/card#me"; //webId
		let content = await this.rdf.addMessage(body, message, maker);
		await fileManager.updateFile(direction, content).then(
			(fileUpdated) => {
				console.log(`Updated file ${fileUpdated}.`);
			},
			(err) => console.log(err)
		);

		//window.location.reload();
	}

	async retrieveLastMessage() {
		var direction;

		await fileManager.popupLogin().then((webId) => {
			direction = webId.split("/profile")[0] + "/public/messages.ttl";
		});

		/*
		await fileManager.readFile(direction).then(
			(body) => {
				var object = JSON.parse(body);
				var size = object.messages.length;
				if (size > 0)
					lastMessage = object.messages[size - 1];
			},
			(err) => {
				console.log(err);
			}
		);
			*/

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

	async retrieveLastMessageReceived(friend) {
		var direction = "https://" + friend + ".solid.community/public/messages.json";
		var lastMessage: String = "";

		await fileManager.readFile(direction).then(
			(body) => {
				var object = JSON.parse(body);
				var size = object.messages.length;
				if (size > 0)
					lastMessage = object.messages[size - 1];
			},
			(err) => {
				console.log(err);
			}
		);
		//window.location.reload();
		return lastMessage;
	}

	async generateBaseTurtle(friend) {
		let id;
		await fileManager.popupLogin().then((webId) => {
			id = webId;
		});

		let msg = "@prefix : <#>.\n";
		return msg;
	}
}
