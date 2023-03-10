import { Component, OnInit } from '@angular/core';
import { Content } from './helper-files/content-interface';
import { contentItems } from "./helper-files/contentDb";
import { MusicService } from "./Services/music.service";
import { MessageService } from './Services/message.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  featuredContent?: Content;
  selectedId: number = 0;
  selectedContent: Content = {
    id: 0,
    title: '',
    description: '',
    creator: ''
  };
  errorMessage: string = '';

  constructor(private musicService: MusicService, private messageService: MessageService) {  }

  ngOnInit() {
    const id = 8;
    this.musicService.getContentById(id).subscribe(content => {
      this.featuredContent = content;
    });
  }

  // Assignment 6 bonus
  getMusic() {
    // clear the old error message when you click the button again
    this.errorMessage = '';

    // validation
    if (this.selectedId === undefined || isNaN(this.selectedId) || this.selectedId < 1 || this.selectedId > contentItems.length) {
      this.errorMessage = 'Error: Please enter a valid ID number.';
      return;
    }

    // get content item by id
    this.musicService.getContentById(this.selectedId).subscribe(
      contentItem => {
        if(contentItem) this.selectedContent = contentItem;
        this.messageService.add(`Retrieved content item at ID: ${this.selectedId}`);
      },
      error => {
        this.errorMessage = `Error: ${this.errorMessage}`;
      }
    );
  }
}


