import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { EditorModel } from '../modules/editor.model';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  @ViewChild('content', { static: true }) content: ElementRef;  

  editor: EditorModel = new EditorModel();

  Data = [  
    { Id: 101, Name: 'Nitin', Salary: 1234 },  
    { Id: 102, Name: 'Sonu', Salary: 1234 },  
    { Id: 103, Name: 'Mohit', Salary: 1234 },  
    { Id: 104, Name: 'Rahul', Salary: 1234 },  
    { Id: 105, Name: 'Kunal', Salary: 1234 }  
  ];  

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

    
  public SavePDF(): void {  
    let content=this.content.nativeElement;  
    let doc = new jsPDF();  
    let _elementHandlers =  
    {  
      '#editor':function(element,renderer){  
        return true;  
      }  
    };  
    doc.html(content.innerHTML),{  
  
      'width':190,  
      'elementHandlers':_elementHandlers  
    };  

    console.log(doc.html);
    
  
    doc.save('test.pdf');  
  }   

  
  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    outline: true,
    width: '60.9rem',
    height: '30rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    defaultFontSize: '4',
  };

}
