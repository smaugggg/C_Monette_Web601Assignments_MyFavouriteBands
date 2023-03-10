import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { Content } from "../helper-files/content-interface";
import { contentItems } from "../helper-files/contentDb";
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor(private messageService: MessageService) { }

  getContent(): Observable<Content[]> {
    const music = of(contentItems);
    this.messageService.add('Content array loaded!')
    return music;
  }

  getContentById(id: number): Observable<Content | undefined> {
    const item = contentItems.find(c => c.id === id);
    if(item) {
      this.messageService.add(`content Item at id: ${id}`);
      return of(item);
    } else return of(undefined);
  }
}
