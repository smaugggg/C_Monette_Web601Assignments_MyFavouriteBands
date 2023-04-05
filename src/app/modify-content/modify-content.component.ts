import { Component, OnInit } from '@angular/core';
import { ContentListComponent } from "../content-list/content-list.component";
import { MusicService } from "../Services/music.service";
import {Content} from "../helper-files/content-interface";

@Component({
  selector: 'modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.scss']
})
export class ModifyContentComponent implements OnInit {
  contentItems!: Content[];

  title: string = '';
  description: string = '';
  creator: string = '';
  imgURL: string = '';
  type: string = '';
  tags: string = '';

  constructor(private musicService: MusicService, private contentComponent: ContentListComponent) {
  }

  ngOnInit(): void {
    this.musicService.getContent().subscribe(contentItemsFromServer => {
      this.contentItems = contentItemsFromServer;
    });
  }

  // id will be set by the server if newContentItem doesn't have one
  addContentToList(): void {
    const tagsArray = this.tags.split(',').map(tag => tag.trim());

    const newContentItem: Content = {
      id: null,
      title: this.title,
      description: this.description,
      creator: this.creator,
      imgURL: this.imgURL,
      type: this.type,
      tags: tagsArray
    };

    this.musicService.addContent(newContentItem).subscribe(newContentFromServer => {
      this.contentComponent.contentItems.push(newContentFromServer);
      // adding something to update the view so that I can see my new band
      this.contentComponent.contentItems = [...this.contentComponent.contentItems];

      this.title = '';
      this.description = '';
      this.creator = '';
      this.imgURL = '';
      this.type = '';
      this.tags = '';
    });
  }
}

// asd
