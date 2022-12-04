import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Board, Task, Trello } from '../modules/schema.model';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor(private http: HttpClient) { }

  private _boards: Board[];

  cadastrarTrello(trello : Trello) : Observable<any> {
    return this.http.post('http://localhost:8080/cadastrar-trello', trello);
  }

  cadastrarTask(task : Task) : Observable<any> {
    return this.http.post('http://localhost:8080/cadastrar-trello', task);
  }

  listarTask() : Observable<any> {
    return this.http.get('http://localhost:8080//listar-task');
  }
  
  getBoards(): Board[] {
    return this._boards;
  }
}