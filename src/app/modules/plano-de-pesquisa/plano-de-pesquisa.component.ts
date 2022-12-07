import { Component, OnInit } from '@angular/core';

import { jsPDF } from "jspdf";


@Component({
  selector: 'app-plano-de-pesquisa',
  templateUrl: './plano-de-pesquisa.component.html',
  styleUrls: ['./plano-de-pesquisa.component.css']
})
export class PlanoDePesquisaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
