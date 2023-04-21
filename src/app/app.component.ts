import {Component, Input, OnInit} from '@angular/core';
import { Router } from "@angular/router";
import { Content } from './helper-files/content-interface';
import { MusicService } from "./Services/music.service";
import { MessageService } from './Services/message.service';
import { UpdateService } from "./update.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  featuredContent?: Content;
  selectedId: number = 0;
  @Input() selectedContent?: Content;
  errorMessage: string = '';

  constructor(private musicService: MusicService,
              private messageService: MessageService,
              private router: Router,
              private updateService: UpdateService) {  }

  ngOnInit() {
    this.updateService.checkForUpdates();
  }

  navigateToList() {
    this.router.navigate(['/list']);
  }

  // Assignment 6 bonus is not quite working
  getMusic() {
    // clear the old error message when you click the button again
    this.errorMessage = '';

    // validation
    if (this.selectedId === undefined || isNaN(this.selectedId) || this.selectedId < 1) {
      this.errorMessage = 'Error: Please enter a valid ID number.';
      return;
    }

    /*// get content item by id
    this.musicService.getContentById(this.selectedId).subscribe(
      contentItem => {
        if(contentItem) this.selectedContent = contentItem;
        this.messageService.add(`Retrieved content item at ID: ${this.selectedId}`);
      }
    );*/
  }
}


