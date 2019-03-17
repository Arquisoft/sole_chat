import { Injectable } from '@angular/core';
import * as fileManager from 'solid-file-client';

@Injectable({
	providedIn: 'root'
})
export class FileManagerService {
	constructor() {}

	async saveSomethingInThePOD() {
		await fileManager.popupLogin().then((webId) => {
			console.log('Logged in as ' + webId);
		});

		var direccion = 'https://javi.solid.community/public/mensajes.json';

		/*
await fileManager.updateFile(direccion,"Si la verdad que es una mierda")
.then( fileCreated => {
  console.log(`Created file ${fileCreated}.`);
}, err => console.log(err) );*/

		var fileContent = {
			mensajes: [
				'Hola este es el primer mensaje',
				'Hola este el segundo',
				'Hola este es el tercero'
			]
		};
		/*
await fileManager.deleteFile( direccion ).then( response => {
  alert( direccion+" successfully deleted" )
}, err => console.log(direccion+" not deleted : "+err) );
*/

		/*
  await fileManager.fetchAndParse(direccion).then(object => {
    console.log(object); 
    
}, err => console.log(err) );*/

		await fileManager.readFile(direccion).then(
			(body) => {
				var object = JSON.parse(body);
				object.mensajes.push('Mensaje ' + object.mensajes.length);

				fileManager.updateFile(direccion, JSON.stringify(object)).then(
					(fileCreated) => {
						console.log(`Created file ${fileCreated}.`);
					},
					(err) => console.log(err)
				);
			},
			(err) => console.log(err)
		);
	}
}
