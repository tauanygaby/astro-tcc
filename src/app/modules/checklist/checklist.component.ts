import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { jsPDF } from "jspdf";
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CrudService } from 'src/app/service/crud.service';
import { ChecklistModel } from '../checklist.model';



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

public onExport() {
  const doc = new jsPDF("l", "pt", "A4");
  const source = document.getElementById("content");
  doc.setFontSize(12)
  doc.html(source, {
    callback: function(pdf) {
      doc.output("dataurlnewwindow"); // preview do pdf
    }
  });
}
  atualizarPage(){
    this.crudService.listarChecklist().subscribe(response => {
      this.check = response.checklist.map((task)=>{
        if (!task.data) return task;

       //conversão da data 
        const dateSplitted = task.data.split('-').map((x: string) => Number(x));
        console.log(dateSplitted);
        
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
    this.crudService.salvar(this.checklist).subscribe(checklist => {
      this.checklist = new ChecklistModel();

      this.atualizarPage();
      
    }, err => {
      alert("Erro! Preencha todos os campos");
      (console.log("Erro ao cadastrar checklist", err));
    })
  }


  remover(task: any) {
    this.crudService.deleteCheck(task).subscribe(checklist => {
      this.checklist = new ChecklistModel();
      this.atualizarPage()
       alert("Tarefa removida com sucesso");
    }, err => {
      alert("Erro ao remover tarefa");
      console.log("Erro ao remover", err);
    })
  }

  editar(task: any) {
    this.crudService.salvar(this.checklist).subscribe(checklist => {
      console.log(this.checklist);
         }, err => {
          alert("Erro!");
       console.log("Erro ao editar", err);
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
}
