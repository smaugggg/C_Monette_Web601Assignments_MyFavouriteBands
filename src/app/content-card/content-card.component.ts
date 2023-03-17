import {Component, Input, OnInit} from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})

export class ContentCardComponent implements OnInit {
  @Input() content: Content = {
    id: 0,
    title: '',
    description: '',
    creator: ''
  };

  constructor() {   }

  ngOnInit() {   }
}

// hi



