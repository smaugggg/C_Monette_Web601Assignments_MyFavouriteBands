import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { MusicService } from "../Services/music.service";
import { Content } from "../helper-files/content-interface";

@Component({
  selector: 'contentDetail',
  templateUrl: './contentDetail.component.html',
  styleUrls: ['./contentDetail.component.scss']
})
export class ContentDetailComponent implements OnInit {

  contentId: number;
contentItem: Content | undefined;

  constructor(private route: ActivatedRoute, private musicService: MusicService) {
    this.contentId = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.musicService.getContentById(id).subscribe(item => {
      this.contentItem = item;
    });
  }
}
