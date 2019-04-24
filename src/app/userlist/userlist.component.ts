import {Component, OnInit, OnChanges, Input} from '@angular/core';
import {RdfService} from '../services/rdf.service';
import {FileManagerService} from '../services/file-manager.service';
import { NgModule , NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
    selector: 'app-userlist',
    templateUrl: './userlist.component.html',
    styleUrls: ['./userlist.component.css']
})
@NgModule({
    schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})

export class UserlistComponent implements OnInit {
    @Input()  user;
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
