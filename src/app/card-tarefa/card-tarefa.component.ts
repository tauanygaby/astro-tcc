import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { appConstants } from '../modules/gerenciadorTarefas/appConstants';
import { IssueType } from '../modules/schema.model';

@Component({
  selector: 'app-card-tarefa',
  templateUrl: './card-tarefa.component.html',
  styleUrls: ['./card-tarefa.component.css']
})
export class CardTarefaComponent implements OnInit {

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
