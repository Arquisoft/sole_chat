import { Component, OnInit, OnChanges } from '@angular/core';
import { RdfService } from '../services/rdf.service';

@Component({
	selector: 'app-userlist',
	templateUrl: './userlist.component.html',
	styleUrls: [ './userlist.component.css' ]
})
export class UserlistComponent implements OnInit {
  
	dummyusers;
	loadingFriends:boolean;
	constructor(private rdf: RdfService) {
		
	}

	ngOnInit() {
		this.loadingFriends = true;
		this.loadFriends();
	
		// Clear cached profile data
		// TODO: Remove this code and find a better way to get the old data
		localStorage.removeItem('oldFriendsData');



		//this.getUserList();
	}

	async loadFriends(){
		try {
			this.loadingFriends = true;
			this.dummyusers = [];
			await this.rdf.getFriends(this.dummyusers);
			if (this.dummyusers) {
				if (!localStorage.getItem('oldFriendsData')) {
					localStorage.setItem('oldFriendsData', JSON.stringify(this.dummyusers));
				  }
			 
			}
	  
			this.loadingFriends = false;
		
		  } catch (error) {
			console.log(`Error: ${error}`);
		  }
	}
	

	async getUserList() {
		this.dummyusers = [];
    await this.rdf.getFriends(this.dummyusers);
    
  }

 


}
