import { Component, OnInit, OnChanges } from '@angular/core';
import { RdfService } from '../services/rdf.service';
import { FileManagerService } from '../services/file-manager.service';

@Component({
	selector: 'app-userlist',
	templateUrl: './userlist.component.html',
	styleUrls: [ './userlist.component.css' ]
})
export class UserlistComponent implements OnInit {
  
	dummyusers;
	constructor(private rdf: RdfService, private fileManager: FileManagerService) {
		
	}

	async ngOnInit() {
		console.log("Empieza onInit");
		await this.getUserList();
		console.log("Acaba onInit");
	}

	async getUserList() {
		this.dummyusers = [];
    await this.fileManager.getFriends(this.dummyusers);
  }
}
