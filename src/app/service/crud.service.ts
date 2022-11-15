import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseUpdate } from '../modules/aluno-update.model';
import { AlunoModel } from '../modules/aluno.model';
import { ChecklistModel } from '../modules/checklist.model';
import { DiarioModel } from '../modules/diario.model';
import { EditorModel } from '../modules/editor.model';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) { }

  listarAlunos() : Observable<any>{
    return this.http.get('http://localhost:8080/lista-alunos');
  }
  getUser(email: string): Observable<any> {
    return this.http.get('http://localhost:8080/aluno/'.concat(email))
  }

  cadastrarAluno(aluno : AlunoModel) : Observable<any> {
   return this.http.post('http://localhost:8080/cadastro', aluno);
  }

  atualizarAluno(email: string, aluno : ResponseUpdate) : Observable<any> {
    return this.http.put('http://localhost:8080/atualizar/'.concat(email), aluno);
  }
  
  removerAluno(id: any) {
    return this.http.delete('http://localhost:8080/delete/'.concat(id));
  }

  cadastrarChecklist(checklist : ChecklistModel) : Observable<any> {
    return this.http.post('http://localhost:8080/checklist', checklist);
   }

   listarChecklist() : Observable<any>{
    return this.http.get('http://localhost:8080/checklist-all');
  }

  cadastrarEditor(editor : EditorModel) : Observable<any> {
    return this.http.post('http://localhost:8080/editor', editor);
  }

  deleteCheck(id:any) : Observable<any>{
    return this.http.delete('http://localhost:8080/deleteCheck/'.concat(id));
  }

  editarCheck(id: string, checklist : ChecklistModel) : Observable<any> {
    return this.http.put('http://localhost:8080/editarCheck/:id'.concat(id), checklist);
  }

  salvar(checklist: ChecklistModel) : Observable<any> {
   if(checklist.id){
    return this.http.put('http://localhost:8080/editarCheck/'.concat(checklist.id), checklist);
   }else{
    return this.http.post('http://localhost:8080/checklist', checklist);
   }
    ;
  }

  cadastrarDiario(diario : DiarioModel) : Observable<any> {
    return this.http.post('http://localhost:8080/cadastrar-diario', diario);
  }

  editarDiario(id: string, diario : DiarioModel) : Observable<any> {
    return this.http.put('http://localhost:8080/editar-diario/:id'.concat(id), diario);
  }

   deleteDiario(id:any) : Observable<any>{
    return this.http.delete('http://localhost:8080/deleteCheck/'.concat(id));
  }

  listarDiario() : Observable<any>{
    return this.http.get('http://localhost:8080/lista-diario');
  }

  getCheck(id: string): Observable<any> {
    return this.http.get('http://localhost:8080/delete-diario/:id'.concat(id));
  }
}
