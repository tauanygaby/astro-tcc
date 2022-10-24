import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';
import { ChecklistModel } from '../checklist.model';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { noAuto } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css']
})
export class ChecklistComponent implements OnInit {

  check: Array<any> = new Array();

  checklist : ChecklistModel = new ChecklistModel();


  constructor(private crudService: CrudService, 
    private router: Router,){ }

  ngOnInit() {
    this.atualizarPage();
}

  atualizarPage(){
    
    this.crudService.listarChecklist().subscribe(response => {
      this.check = response.checklist.map((task)=>{
        if (!task.data) return task;

        const dateSplitted = task.data.split('-').map((x: string) => Number(x))
        console.log(dateSplitted)
        
        // task.data = new Date(dateSplitted[0], dateSplitted[1], dateSplitted[3])
        // .toLocaleDateString("pt-br");
        
        return task;
      });
      console.log(this.checklist);
      console.log(this.check);
    }, err => {
      (console.log("erro ao listar", err));
    })
    console.log(this.checklist);
  }
  cadastrarChecklist() {
    console.log(this.checklist);
    this.crudService.cadastrarChecklist(this.checklist).subscribe(checklist => {
      this.checklist = new ChecklistModel();
      this.atualizarPage();
      
    }, err => {
      (console.log("Erro ao cadastrar checklist", err));
    })
  }

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    outline: false,
    showToolbar: false,
    width: '43.5rem',
    height: '2rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    defaultFontSize: '2',
   
  };

}
