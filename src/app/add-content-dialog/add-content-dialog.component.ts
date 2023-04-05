import {Component, Inject} from '@angular/core';
import {Content} from "../helper-files/content-interface";
import {MusicService} from "../Services/music.service";
import {ContentListComponent} from "../content-list/content-list.component";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";


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
  tags: string = '';

  constructor(private musicService: MusicService,
              private contentComponent: ContentListComponent,
              public dialogRef: MatDialogRef<AddContentDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: { contentType: string }
  ) {
    this.title = '';
    this.creator = '';
    this.description = '';
    this.imgURL = '';
    this.type = '';
    this.tags = '';
  }

  ngOnInit(): void {
    this.musicService.getContent().subscribe(contentItemsFromServer => {
      this.contentItems = contentItemsFromServer;
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }


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
