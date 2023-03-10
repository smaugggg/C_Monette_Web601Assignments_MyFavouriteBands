import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { Content } from "./helper-files/content-interface";
import { contentItems } from "./helper-files/contentDb";

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor() { }

  getContent(): Observable<Content[]> {
    return of(contentItems);
  }

  getContentById(id: number): Observable<Content | undefined> {
    const item = contentItems.find(c => c.id === id);
    if(item) return of(item);
    else return of(undefined);
  }
}
