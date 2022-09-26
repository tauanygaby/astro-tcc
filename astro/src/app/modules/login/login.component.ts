import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';
import { AlunoModel } from '../aluno.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aluno : AlunoModel = new AlunoModel();

  constructor(private crudService: CrudService) { }

  ngOnInit() {
  }

  entrar() {
    console.log(this.aluno);
    this.crudService.getUser(this.aluno.email).subscribe(aluno => {
      this.aluno = new AlunoModel();

    }, err => {
      console.log("Erro ao entrar", err);
    })
  }
}
