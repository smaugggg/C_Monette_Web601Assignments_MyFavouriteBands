import { Component, EventEmitter, Output } from '@angular/core';
import { Content } from 'src/app/helper-files/content-interface'

@Component({
  selector: 'create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.css']
})
export class CreateContentComponent {
  @Output() addContentEvent = new EventEmitter<Content>();

  id: number | null | undefined;
  title: string | undefined;
  description: string | undefined;
  creator: string | undefined;
  imgURL?: string;
  type?: string;
  tags?: string;

  addContent(): Promise<Content> {
    return new Promise((resolve, reject) => {
      if (this.id && this.title && this.description && this.creator) {
        const newContent: Content = {
          id: this.id,
          title: this.title,
          description: this.description,
          creator: this.creator,
          imgURL: this.imgURL,
          type: this.type,
          tags: this.tags ? this.tags.split(',') : []
        };
        this.addContentEvent.emit(newContent);
        this.clearForm();
        resolve(newContent);
      } else {
        reject('Missing required fields');
      }
    });
  }


  clearForm() {
    this.id = null;
    this.title = '';
    this.description = '';
    this.creator = '';
    this.imgURL = '';
    this.type = '';
    this.tags = '';
  }
}
