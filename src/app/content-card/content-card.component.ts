import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})

export class ContentCardComponent implements OnInit {

    contentItems: Content[] = [
      { id: 1,
        title: 'Rammstein',
        description: 'Rammstein is a German industrial metal band formed in Berlin in 1994.',
        creator: 'Till Lindemann, Paul Landers, Christoph Schneider, Christian Lorenz, Richard Kruspe, Oliver Riedel',
        type: "industrial rock" },
      { id: 2,
        title: 'Dreamcatcher',
        description: 'Dreamcatcher is a South Korean girl group formed by HappyFace Entertainment. Their sound is uniquely rock inspired.',
        creator: 'JiU, SuA, Siyeon, Handong, Yoohyeon, Dami, Gahyeon',
        type: "K-Pop"},
      { id: 3,
        title: 'Sum 41',
        description: 'Sum 41 is a alternative rock group from Canada form in 1996.',
        creator: 'Deryck Whibley, Dave Baksh, Jason McCaslin, Tom Thacker, Frank Zummo',
        type: "New Rock/ Alternative"}
    ];
    contentList = new ContentList();

    constructor() {
      this.contentItems.forEach((item: Content) => this.contentList.addItem(item));
    }

    ngOnInit(): void {
      const contentcontainer = document.getElementById("contentCard-container")!;
      for(let i = 0; i < this.contentList.getLength(); i++ ) {
        contentcontainer.innerHTML += this.contentList.returnHTML(i);
      }
      // Uncomment for error to show up in the console (bonus)
      // contentcontainer.innerHTML += this.contentList.returnHTML(50);
    }
}





