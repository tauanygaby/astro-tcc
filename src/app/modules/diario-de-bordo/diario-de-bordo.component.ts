import { Component, OnInit, TemplateRef } from '@angular/core';
import { jsPDF } from "jspdf";
import { CrudService } from 'src/app/service/crud.service';
import { DiarioModel } from '../diario.model';
import { EditorModel } from '../editor.model';

@Component({
  selector: 'app-diario-de-bordo',
  templateUrl: './diario-de-bordo.component.html',
  styleUrls: ['./diario-de-bordo.component.css']
})
export class DiarioDeBordoComponent implements OnInit {

  diarioDeBordo: DiarioModel = new DiarioModel();
  
  constructor(private crudService: CrudService) 
  {
  }

  ngOnInit()
  {
    this.crudService..subscribe(res => {
      this.updateAluno = {
        id: res.aluno.id,
        nome: res.aluno.nome,
        nickname: res.aluno.nickname,
        senha: res.aluno.senha,
        instituicao: res.aluno.instituicao,
        foto: res.aluno.foto
  }


  atualizarPage(){
       //conversão da data 
        const dateSplitted = task.data.split('-').map((x: string) => Number(x));
        console.log(dateSplitted);   
  }

  cadastrarChecklist() {
    console.log(this.diarioDeBordo);
    this.crudService.cadastrarDiario(this.diarioDeBordo).subscribe(diarioDeBordo => {
      diarioDeBordo = new DiarioModel();

      this.atualizarPage();
      
    }, err => {
      alert("Erro ao cadastrar informações");
      (console.log("Erro ao cadastrar informações", err));
    })
  }


  atualizar() {
    console.log(this.updateAluno);
    this.crudService.atualizarAluno(this.email, this.updateAluno).subscribe(aluno => {
      this.updateAluno = new ResponseUpdate();
      this.load();
    }, err => {
      console.log("Erro ao atualizar", err);
    })
  }

  public onExport() {
    const doc = new jsPDF("p", "pt", "a4");
    const source = document.getElementById("content");
    // doc.text("Test", 40, 20);
    doc.setFontSize(12)
    doc.html(source, {
      callback: function(pdf) {
        doc.output("dataurlnewwindow"); // preview pdf file when exported
      }
    });
    // autotable(doc, {
    //   html: '#content',
    //   useCss: true
    // })
  }
  

}
