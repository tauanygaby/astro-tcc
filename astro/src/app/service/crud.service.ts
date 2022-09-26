import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseUpdate } from '../modules/aluno-update.model';
import { AlunoModel } from '../modules/aluno.model';

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
}
