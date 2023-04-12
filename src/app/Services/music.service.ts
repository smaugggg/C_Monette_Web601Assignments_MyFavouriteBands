import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { Content } from "../helper-files/content-interface";
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor(private messageService: MessageService, private http: HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type':'application/json' })
  };

  getContent(): Observable<Content[]> {
    this.messageService.add('Content array loaded!')
    return this.http.get<Content[]>("api/content");
    // const music = of(contentItems);
    // return music;
  }

  getContentById(id: string | null): Observable<Content> {
    const url = `api/content/${id}`;
    return this.http.get<Content>(url);
  }

  addContent(newContentItem: Content): Observable<Content> {
    this.messageService.add('New Content has been added with:' + newContentItem.title);
    return this.http.post<Content>("api/content", newContentItem, this.httpOptions);
  }

  updateContent(contentItem: Content): Observable<any>{
    this.messageService.add('Now displaying content page for: ' + contentItem.title)
    return this.http.put("api/content", contentItem, this.httpOptions);
  }
}
