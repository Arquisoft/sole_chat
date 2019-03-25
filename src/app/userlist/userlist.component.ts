import { Component, OnInit, OnChanges } from '@angular/core';
import { RdfService } from '../services/rdf.service';

@Component({
	selector: 'app-userlist',
	templateUrl: './userlist.component.html',
	styleUrls: [ './userlist.component.css' ]
})
export class UserlistComponent implements OnInit,OnChanges {
  
	dummyusers;
	constructor(private rdf: RdfService) {
		this.getUserList();
	}

	ngOnInit() {
		this.getUserList();
	}

	async getUserList() {
		this.dummyusers = [];
    await this.rdf.getFriends(this.dummyusers);
    
  }
  ngOnChanges() {
   this.getUserList();
   console.log("Cambio");
  }

}
