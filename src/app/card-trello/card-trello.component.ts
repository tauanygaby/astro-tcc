import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IssueType } from '../modules/schema.model';
import { appConstants } from '../modules/trello/appConstants';

@Component({
  selector: 'app-card-trello',
  templateUrl: './card-trello.component.html',
  styleUrls: ['./card-trello.component.css']
})
export class CardTrelloComponent implements OnInit {

  issueTypesWithColor = appConstants.issueTypeListWithColor;
  issueTypes = Object.values(IssueType);
  @Output() edit = new EventEmitter<void>();
  @Output() delete = new EventEmitter<void>();
  @Input() text: string;
  @Input() author: string;
  @Input() tags: [];
  @Input() image: string;
  @Input() issueType?: string;
  @Input() createdAt: Date;

  constructor() { }

  ngOnInit() {
  }

}
