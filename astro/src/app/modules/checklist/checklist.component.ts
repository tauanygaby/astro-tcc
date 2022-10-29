import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';
import { ChecklistModel } from '../checklist.model';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { noAuto } from '@fortawesome/fontawesome-svg-core';
import {  TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-checklist', 
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css'],
})
export class ChecklistComponent implements OnInit {

  check: Array<any> = new Array();

  checklist : ChecklistModel = new ChecklistModel();

  id : string;

  modalRef?: BsModalRef;
  


  constructor(private crudService: CrudService, 
    private router: ActivatedRoute,
    private modalService: BsModalService,){ }

  ngOnInit() {
    this.atualizarPage();
}

load() {
  location.reload()
}

openModal(template: TemplateRef<any>) {
  this.modalRef = this.modalService.show(template);
}

  atualizarPage(){
    this.crudService.listarChecklist().subscribe(response => {
      this.check = response.checklist.map((task)=>{
        if (!task.data) return task;

       //conversão da data 
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


  remover(task: any) {
    this.crudService.deleteCheck(task).subscribe(checklist => {
      this.checklist = new ChecklistModel();
      this.atualizarPage()
    }, err => {
      console.log("Erro ao remover", err);
    })
  }

  editar(task: any) {
    this.crudService.editarCheck(task, this.checklist).subscribe(check => {
      this.checklist = {
        id: check.checklist.id,
        texto: check.checklist.texto,
        descricao: check.checklist.descricao,
        data: check.checklist.data,
      }
      console.log(this.checklist);
      
    }, err => {
      console.log("Erro ao atualizar", err);
    })
    }

    pegarDados(task: any){
      this.crudService.getCheck(task).subscribe(res => {
        this.checklist = {
          id: res.checklist.id,
          texto: res.checklist.texto,
          descricao: res.checklist.descricao,
          data: res.checklist.data,
        }
        console.log(this.checklist);
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
