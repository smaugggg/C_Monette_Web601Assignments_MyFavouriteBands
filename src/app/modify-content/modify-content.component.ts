import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ContentListComponent } from "../content-list/content-list.component";
import { MusicService } from "../Services/music.service";
import { Content } from "../helper-files/content-interface";
import { MatDialog } from '@angular/material/dialog';
import { AddContentDialogComponent } from '../add-content-dialog/add-content-dialog.component';


@Component({
  selector: 'modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.scss'],
  providers: [ContentListComponent]
})
export class ModifyContentComponent implements OnInit {
  contentItems!: Content[];

  title: string = '';
  description: string = '';
  creator: string = '';
  imgURL: string = '';
  type: string = '';
  tags: string = '';

  constructor(private musicService: MusicService,
              private contentComponent: ContentListComponent,
              private dialog: MatDialog,
              private cdRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.musicService.getContent().subscribe(contentItemsFromServer => {
      this.contentItems = contentItemsFromServer;
    });
  }

  /*// id will be set by the server if newContentItem doesn't have one
  addContentToList(newContentItem: Content): void {
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

      console.log(JSON.stringify(newContentFromServer));
    });
  }*/


  openAddContentDialog() {
    const dialogRef = this.dialog.open(AddContentDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const newContentItem: Content = {
          id: null,
          title: result.title,
          description: result.description,
          creator: result.creator,
          imgURL: result.imgURL,
          type: result.type,
          tags: result.tags
        };

        // for some reason the view is not updating to reflect the new content having been added,
        // BUT the console log is logging that the item exists.
        this.musicService.addContent(newContentItem).subscribe(newContentFromServer => {
          this.contentItems.push(newContentFromServer);
          this.contentItems = [...this.contentItems];

          this.title = '';
          this.description = '';
          this.creator = '';
          this.imgURL = '';
          this.type = '';
          this.tags = '';

          console.log(this.contentItems);
        });
      }
    });
  }

}

