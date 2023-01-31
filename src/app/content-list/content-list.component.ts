import {Component, Input, OnInit} from '@angular/core';
import {Content} from "../helper-files/content-interface";

@Component({
  selector: 'contentlist',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {
  @Input() contentItems: Content[];

  constructor() {
    this.contentItems = [
        { id: 1,
          title: 'Rammstein',
          description: 'Rammstein is a German industrial metal band formed in Berlin in 1994.',
          imgURL: '/assets/images/rammstein.png',
          creator: 'Till Lindemann, Paul Landers, Christoph Schneider, Christian Lorenz, Richard Kruspe, Oliver Riedel',
          type: "industrial rock" },
        { id: 2,
          title: 'Dreamcatcher',
          description: 'Dreamcatcher is a South Korean girl group formed by HappyFace Entertainment. Their sound is uniquely rock inspired.',
          imgURL: '/assets/images/dreamcatcher.png',
          creator: 'JiU, SuA, Siyeon, Handong, Yoohyeon, Dami, Gahyeon',
          type: "K-Pop"},
        { id: 3,
          title: 'Sum 41',
          description: 'Sum 41 is a alternative rock group from Canada form in 1996.',
          imgURL: '/assets/images/sum41.png',
          creator: 'Deryck Whibley, Dave Baksh, Jason McCaslin, Tom Thacker, Frank Zummo',
          type: "New Rock/ Alternative"},
        { id: 4,
          title: 'Mumford & Sons',
          description: 'Mumford&Sons is a British folk rock band formed in London in 2007.',
          imgURL: '/assets/images/mumford.png',
          creator: 'Marcus Mumford, Ted Dwane, Ben Lovett',
          type: "Folk Rock"},
        { id: 5,
          title: 'In This Moment',
          description: 'In This Moment is an American Rock band from Los Angeles, California formed in 2005.',
          imgURL: '/assets/images/inthismoment.png',
          creator: 'Maria Brink, Christ Howorth, Travis Johnson, RAndy Weitzel, Kent Dimmel',
          type: "Alternative Metal/Metalcore"},
        { id: 6,
          title: 'Red Velvet',
          description: 'Red Velvet is a South Korea girl group formed and managed by SM Entertainment. They have two distinct sides: the Red side is more pop based, while the Velvet side focuses on R&B/Ballads.',
          imgURL: '/assets/images/redvelvet.png',
          creator: 'Irene, Seulgi, Wendy, Joy, Yeri',
          type: "K-Pop"}
      ];
  }

  ngOnInit(): void {   }


  imageClick(item: Content) {
      console.log(item.id + " " + item.title);
  }


}
