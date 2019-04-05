import { Component } from '@angular/core';
import { popupLogin } from 'solid-auth-client/dist-lib/solid-auth-client.bundle.js';
import { FileManagerService } from './services/file-manager.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private fileManager: FileManagerService) {}

  ngOnInit() {
    this.fileManager.createRootFolder();
  }
}
