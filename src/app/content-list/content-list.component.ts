import { Component, Input, OnInit } from '@angular/core';
import { Content } from "../helper-files/content-interface";
import { MusicService } from "../Services/music.service";
import { MessageService } from "../Services/message.service";
import { MatCardModule } from "@angular/material/card";

@Component({
  selector: 'content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  search?: string;
  contentItems: Content[] = [];

  constructor(private musicService: MusicService) {  }

  ngOnInit() {
    this.musicService.getContent().subscribe(items => {
      this.contentItems = items;
    });
  }

  imageClick(item: Content) {
      console.log(item.id + " " + item.title);
  }

  // define the variables I need
  searchTerm = '';
  searchResult: boolean | null = null;
  searchContent() {
    if(this.contentItems) this.searchResult = this.contentItems.some(c => c.title === this.searchTerm);
  }


}
