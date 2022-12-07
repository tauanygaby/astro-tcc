import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Talk } from '../modules/schema.model';

@Component({
  selector: 'app-delete-talk',
  templateUrl: './delete-talk.component.html',
  styleUrls: ['./delete-talk.component.css']
})
export class DeleteTalkComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public talk: Talk) { }

  ngOnInit() {
  }

}
