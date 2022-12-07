import { Component, OnInit, TemplateRef } from '@angular/core';
import { jsPDF } from "jspdf";
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CrudService } from 'src/app/service/crud.service';
import { DiarioModel } from '../diario.model';

@Component({
  selector: 'app-diario-de-bordo',
  templateUrl: './diario-de-bordo.component.html',
  styleUrls: ['./diario-de-bordo.component.css']
})
export class DiarioDeBordoComponent implements OnInit {

  diarios: Array<any> = new Array();
  
  diarioDeBordo: DiarioModel = new DiarioModel();

  modalRef?: BsModalRef;
  
  constructor(private crudService: CrudService,
    private modalService: BsModalService,) {}

  ngOnInit() {
    this.atualizarPage();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  
  atualizarPage(){
    this.crudService.listarDiario().subscribe(response => {
      this.diarios = response.diarios.map((teste)=>{
        console.log(teste);
        return teste;
      })
      }, err => {
        alert("Erro ao listar infos");
        (console.log("Erro ao listar infos", err));
      })
  }

  cadastrarDiario() {
    console.log(this.diarioDeBordo);
    this.crudService.cadastrarDiario(this.diarioDeBordo).subscribe(diarioDeBordo => {
      diarioDeBordo = new DiarioModel();
      alert("Cadastro realizado com sucesso!");
      this.atualizarPage();
      
    }, err => {
      alert("Erro ao cadastrar informações");
      (console.log("Erro ao cadastrar informações", err));
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
        //img
        url="././assets/img/imagemDeCapa.png";
        inputFileChange(event){
          if (event.target.files){
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onload=(event:any)=>{
              this.url=event.target.result;
                }
              }
            }
        

}
