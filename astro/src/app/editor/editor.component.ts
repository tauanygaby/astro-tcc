import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { EditorModel } from '../modules/editor.model';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  editor: EditorModel = new EditorModel();

  public Editor = ClassicEditor;

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

  // config: AngularEditorConfig = {
  //   editable: true,
  //   spellcheck: true,
  //   outline: true,
  //   width: '43.5rem',
  //   height: '30rem',
  //   minHeight: '5rem',
  //   placeholder: 'Enter text here...',
  //   translate: 'no',
  //   defaultParagraphSeparator: 'p',
  //   defaultFontName: 'Arial',
  //   defaultFontSize: '4',
  // };

}
