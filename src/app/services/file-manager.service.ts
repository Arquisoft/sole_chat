import { Injectable } from '@angular/core';
import * as fileManager from 'solid-file-client';
import { componentNeedsResolution } from '@angular/core/src/metadata/resource_loading';

@Injectable({
	providedIn: 'root'
})

export class FileManagerService {
	constructor() { }

	async saveSomethingInThePOD(message) {
		let direction: String;

		await fileManager.popupLogin().then((webId) => {
			console.log('Logged in as ' + webId);
			direction = webId.split("/profile")[0] + "/public/messages.json";
		});

		var baseContent = {
			messages: [

			]
		};

		await fileManager.readFile(direction).then(
			(body) => {
				this.updateFile(body, direction, message);
			},
			(err) => {
				if (err.includes("Not Found")) {
					fileManager.createFile(direction, JSON.stringify(baseContent)).then(
						(fileCreated) => {
							console.log(`Created file ${fileCreated}.`);
						});

					fileManager.readFile(direction).then(
						(body) => {
							this.updateFile(body, direction, message);
						},
						(err) => {
							console.log(err);
						}
					);
				} else {
					console.log(err)
				}

			}
		);
	}

	updateFile(body, direction, message) {
		var object = JSON.parse(body);
		//object.messages.push('Message ' + object.menssages.length);
		object.messages.push(message);

		fileManager.updateFile(direction, JSON.stringify(object)).then(
			(fileUpdated) => {
				console.log(`Updated file ${fileUpdated}.`);
			},
			(err) => console.log(err)
		);

		window.location.reload();
	}

	async retrieveLastMessage() {
		var direction;
		var lastMessage : String = "";

		await fileManager.popupLogin().then((webId) => {
			direction = webId.split("/profile")[0] + "/public/messages.json";
		});

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

		return lastMessage;
	}
}
