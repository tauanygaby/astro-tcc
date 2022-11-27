import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlunoModel } from './../modules/aluno.model';
import { CrudService } from './crud.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private httpClient: HttpClient,
    private router: Router, private crudService: CrudService) { }
  
  public deslogar() {
    localStorage.clear();
    this.router.navigate(['login']);
  }

  public obterUsuarioLogado(): AlunoModel {
    return JSON.parse(atob(localStorage.getItem('usuario')))
  }

  public obterIdUsuarioLogado(): string {
    console.log(JSON.parse(atob(localStorage.getItem('usuario')))[0].email);
    return JSON.parse(atob(localStorage.getItem('usuario')))[0].email
    
  }

  public obterTokenUsuario(): string {
    return localStorage.getItem('token')
      ? JSON.parse(atob(localStorage.getItem('token')))
      : null;
  }
  
  public logado(): boolean {
    return localStorage.getItem('token') ? true : false;
  }
}
