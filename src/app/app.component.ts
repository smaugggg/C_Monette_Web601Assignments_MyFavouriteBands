import { Component, OnInit } from '@angular/core';
import { Content } from './helper-files/content-interface';
import { MusicService } from "./music-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  featuredContent?: Content;

  constructor(private musicService: MusicService) {  }

  ngOnInit() {
    const id = 8;
    this.musicService.getContentById(id).subscribe(content => {
      this.featuredContent = content;
    });
  }
}


