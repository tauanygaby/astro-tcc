import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from '../../service/crud.service';
import { AlunoModel } from '../aluno.model';
import { ResponseUpdate } from './../aluno-update.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  email: string;
  aluno: AlunoModel = new AlunoModel();
  updateAluno: ResponseUpdate = new ResponseUpdate();
  
  constructor(private crudService: CrudService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.email = this.router.snapshot.paramMap.get('email');
    this.crudService.getUser(this.email).subscribe(res => {
      this.updateAluno = {
        id: res.aluno.id,
        nome: res.aluno.nome,
        nickname: res.aluno.nickname,
        senha: res.aluno.senha,
        instituicao: res.aluno.instituicao
      }
      console.log(this.updateAluno);
      
    })
  }

  atualizar() {
    console.log(this.updateAluno);
    this.crudService.atualizarAluno(this.email, this.updateAluno).subscribe(aluno => {
      this.updateAluno = new ResponseUpdate();
    }, err => {
      console.log("Erro ao atualizar", err);
    })
  }

  remover() {
    console.log(this.aluno);
    this.crudService.removerAluno(this.updateAluno.id).subscribe(aluno => {
      this.aluno = new AlunoModel();
    }, err => {
      console.log("Erro ao remover", err);
    })
  }
}
