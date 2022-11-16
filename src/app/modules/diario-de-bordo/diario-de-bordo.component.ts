import { Component, OnInit } from '@angular/core';
import { jsPDF } from "jspdf";

@Component({
  selector: 'app-diario-de-bordo',
  templateUrl: './diario-de-bordo.component.html',
  styleUrls: ['./diario-de-bordo.component.css']
})
export class DiarioDeBordoComponent implements OnInit {


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
  


}
