import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';
import { ChecklistModel } from '../checklist.model';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css']
})
export class ChecklistComponent implements OnInit {

  checklist : ChecklistModel = new ChecklistModel();

  constructor(private crudService: CrudService, private router: Router) { }

  ngOnInit() {
  }
  
  cadastrar() {
    console.log(this.checklist);
    this.crudService.cadastrarChecklist(this.checklist).subscribe(checklist => {
      this.checklist = new ChecklistModel();
      
    }, err => {
      (console.log("Erro ao cadastrar banana", err));
    })
  }

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '5rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
   
  };

}
