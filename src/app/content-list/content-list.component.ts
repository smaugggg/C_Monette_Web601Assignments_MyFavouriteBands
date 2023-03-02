import {Component, Input, OnInit} from '@angular/core';
import {Content} from "../helper-files/content-interface";

@Component({
  selector: 'contentlist',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {
  @Input() contentItems: Content[];
  search?: string;

  constructor() {
    this.contentItems = [
        { id: 1,
          title: 'Rammstein',
          description: 'Rammstein is a German industrial metal band formed in Berlin in 1994.',
          imgURL: '/assets/images/rammstein.png',
          creator: 'Till Lindemann, Paul Landers, Christoph Schneider, Christian Lorenz, Richard Kruspe, Oliver Riedel',
          type: "Metal",
          tags: ["germany", "rock", "metal", "industrial metal"]
        },
        { id: 2,
          title: 'Dreamcatcher',
          description: 'Dreamcatcher is a South Korean girl group formed by HappyFace Entertainment. Their sound is uniquely rock inspired.',
          imgURL: '/assets/images/dreamcatcher.png',
          creator: 'JiU, SuA, Siyeon, Handong, Yoohyeon, Dami, Gahyeon',
          type: "K-Pop",
          tags: ["south korea", "rock", "k-pop", "pop"]
        },
        { id: 3,
          title: 'Sum 41',
          description: 'Sum 41 is a alternative rock group from Canada form in 1996.',
          imgURL: '/assets/images/sum41.png',
          creator: 'Deryck Whibley, Dave Baksh, Jason McCaslin, Tom Thacker, Frank Zummo',
          tags: ["canada", "rock", "punk", "pop punk", "new rock/alternative"]
        },
        { id: 4,
          title: 'Mumford & Sons',
          description: 'Mumford&Sons is a British folk rock band formed in London in 2007.',
          imgURL: '/assets/images/mumford.png',
          creator: 'Marcus Mumford, Ted Dwane, Ben Lovett',
          tags: ["great britain", "folk", "indie"]
        },
        { id: 5,
          title: 'In This Moment',
          description: 'In This Moment is an American Rock band from Los Angeles, California formed in 2005.',
          imgURL: '/assets/images/inthismoment.png',
          creator: 'Maria Brink, Christ Howorth, Travis Johnson, RAndy Weitzel, Kent Dimmel',
          type: "Metal",
          tags: ["usa", "metal", "metalcore", "female-led"]
        },
        { id: 6,
          title: 'Red Velvet',
          description: 'Red Velvet is a South Korea girl group formed and managed by SM Entertainment. They have two distinct sides: the Red side is more pop based, while the Velvet side focuses on R&B/Ballads.',
          creator: 'Irene, Seulgi, Wendy, Joy, Yeri',
          type: "K-Pop",
          tags: ["south korea", "pop", "k-pop"]
        },
        { id: 7,
          title: 'Måneskin',
          description: 'Måneskin is an Italian rock band currently making waves in the rock scene. They made their international breakthrough by winning the Eurovision Song Contest in 2021.',
          creator: 'Damiano David, Victoria De Angelis, Thomas Raggi, Ethan Torchio',
          tags: ["italy", "rock", "glam rock", "competition winner"]
        },
        { id: 8,
          title: 'Falling in Reverse',
          description: 'Falling in Reverse is an American rock band formed in 2008 formed by lead singer Ronnie Radke while he was incarcerated. While they started with pop punk and electornica, the group--with Radkes lead--have branched into post-hardcore and metalcore in recent years.',
          imgURL: '/assets/images/fallinginreverse.png',
          creator: 'Ronnie Radke, Max Georgiev, Christian Thompson, Tyler Burgess',
          type: "Metal",
          tags: ["america", "metalcore", "post-hardcore", "rap metal"]
        }
      ];


  }

  ngOnInit(): void {   }


  imageClick(item: Content) {
      console.log(item.id + " " + item.title);
  }

  // define the variables I need
  searchTerm = '';
  searchResult: boolean | null = null;
  searchContent() {
    this.searchResult = this.contentItems.some(c => c.title === this.searchTerm);
  }


}

// this is a comment to test that assignment 5 branch was created
