import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Board } from '../modules/schema.model';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor(private http: HttpClient) { }

  private _boards: Board[] = require('./data.json');

  getBoards(): Board[] {
    return this._boards;
  }
}