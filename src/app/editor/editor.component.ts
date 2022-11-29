import { Component, OnInit} from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { EditorModel } from '../modules/editor.model';
import { CrudService } from '../service/crud.service';
import { jsPDF } from "jspdf";

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit { 

  editor: EditorModel = new EditorModel();

  constructor(private crudService: CrudService) { }

  ngOnInit() {
  }

  salvarInfoEditor() {
    console.log(this.editor);
    this.crudService.cadastrarEditor(this.editor).subscribe(editor => {
      this.editor = new EditorModel();
    }, err => {
      (console.log("Erro ao salvar info do editor", err));
    })
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

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    outline: false,
    width: '60.9rem',
    height: '50rem',
    minHeight: '5rem',
    placeholder: 'Insira seu texto aqui...',
    translate: 'yes',
    defaultParagraphSeparator: 'p',
    showToolbar: false,
  };

}
