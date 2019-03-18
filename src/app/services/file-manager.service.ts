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
			//direction = webId.split("/profile")[0] + "/public/messages.json";
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

		/*
		var baseContent = {
			messages: [

			]
		};
		*/

		var baseContent = await this.generateBaseTurtle(friend);

		await fileManager.createFile(direction, baseContent).then(
			(fileCreated) => {
				console.log(`Created file ${fileCreated}.`);
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
		let maker = (direction.split("//")[1]).split(".solid")[0];
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
		msg += "@prefix mee: <http://www.w3.org/ns/pim/meeting#>.\n";
		msg += "@prefix terms: <http://purl.org/dc/terms/>. ";
		msg += "@prefix XML: <http://www.w3.org/2001/XMLSchema#>.\n";
		msg += "@prefix n: <http://rdfs.org/sioc/ns#>.\n";
		msg += "@prefix n0: <http://xmlns.com/foaf/0.1/>.\n";
		msg += "@prefix n1: <http://purl.org/dc/elements/1.1/>.\n";
		msg += "@prefix flow: <http://www.w3.org/2005/01/wf/flow#>.\n";

		return msg;
	}
}
