import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DeleteTalkComponent } from 'src/app/delete-talk/delete-talk.component';
import { EditTalkComponent } from 'src/app/edit-talk/edit-talk.component';
import { BoardService } from 'src/app/service/board.service';
import { Board, Trello } from '../schema.model';
import { Task } from './../schema.model';
@Component({
  selector: 'app-gerenciador-tarefas',
  templateUrl: './gerenciador-tarefas.component.html',
  styleUrls: ['./gerenciador-tarefas.component.css']
})
export class GerenciadorTarefasComponent implements OnInit {

  boards: Board[] = [];

  constructor(private _boardService: BoardService, private _dialog: MatDialog) {
    this.boards = this._boardService.getBoards();
   }

  ngOnInit() {
  }

  trackIds(boardIndex): string[] {
    return this.boards[boardIndex].trello.map(track => track.id);
  }

  onTalkDrop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  onTrackDrop(event: CdkDragDrop<Trello[]>) {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  }

  addEditTalk(task: Task, trello: Trello, edit = false) {
    this._dialog.open(EditTalkComponent, {data: {task, edit}, width: '500px'})
      .afterClosed()
      .subscribe(newTalkData => edit ? Object.assign(task, newTalkData) : trello.tasks.unshift(newTalkData));
  }

  deleteTalk(talk: Task, track: Trello) {
    this._dialog.open(DeleteTalkComponent, {data: talk, width: '500px'})
      .afterClosed()
      .subscribe(response => {
        if (response) {
          track.tasks.splice(track.tasks.indexOf(talk), 1);
        }
      });
  }

  // filterByDate(talks, asc = 1) {
  //   talks = [...talks.sort((a: any, b: any) => (asc) * (new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()))];
  //   console.log(talks);
  // }

}
