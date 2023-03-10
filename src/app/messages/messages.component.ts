import { Component } from '@angular/core';
import { MessageService } from '../Services/message.service';


@Component({
  selector: 'messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {

  constructor(public messageService: MessageService) {}


}
