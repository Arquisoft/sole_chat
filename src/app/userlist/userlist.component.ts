import {Component, OnInit, OnChanges} from '@angular/core';
import {RdfService} from '../services/rdf.service';
import {FileManagerService} from '../services/file-manager.service';

@Component({
    selector: 'app-userlist',
    templateUrl: './userlist.component.html',
    styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

    dummyusers;

    constructor(private fileManager: FileManagerService) {

    }

    async ngOnInit() {
        await this.getUserList();
    }

    async getUserList() {
        this.dummyusers = [];
        await this.fileManager.getFriends(this.dummyusers);
    }
}
