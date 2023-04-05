import { Component, Inject, ChangeDetectorRef } from '@angular/core';
import { Content } from "../helper-files/content-interface";
import { MusicService } from "../Services/music.service";
import { ContentListComponent } from "../content-list/content-list.component";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'add-content-dialog',
  templateUrl: './add-content-dialog.component.html',
  styleUrls: ['./add-content-dialog.component.scss']
})
export class AddContentDialogComponent {
  contentItems!: Content[];

  title: string = '';
  description: string = '';
  creator: string = '';
  imgURL: string = '';
  type: string = '';
  tagses: string = '';

  constructor(
    private musicService: MusicService,
    private contentComponent: ContentListComponent,
    public dialogRef: MatDialogRef<AddContentDialogComponent>) {}

  ngOnInit(): void {
    this.musicService.getContent().subscribe(contentItemsFromServer => {
      this.contentItems = contentItemsFromServer;
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onAddClick(): void {
    const tagsArray = this.tagses.split(',').map(tag => tag.trim());

    const newContentItem: Content = {
      id: null,
      title: this.title,
      description: this.description,
      creator: this.creator,
      imgURL: this.imgURL,
      type: this.type,
      tags: tagsArray
    };

    this.dialogRef.close(newContentItem);
  }

}

