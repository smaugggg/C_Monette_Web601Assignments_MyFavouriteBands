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

  addContent(newContentItem: Content): Observable<Content>{
    return this.http.post<Content>("api/content", newContentItem, this.httpOptions);
  }

  updateContent(contentItem: Content): Observable<any>{
    return this.http.put("api/content", contentItem, this.httpOptions);
  }
}
