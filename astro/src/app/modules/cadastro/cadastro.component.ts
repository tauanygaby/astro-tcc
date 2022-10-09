import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../../service/crud.service';
import { AlunoModel } from '../aluno.model';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  aluno : AlunoModel = new AlunoModel();

  constructor(private crudService: CrudService, private router: Router) { }

  ngOnInit() {
  }

  cadastrar() {
    console.log(this.aluno);
    this.crudService.cadastrarAluno(this.aluno).subscribe(aluno => {
      this.aluno = new AlunoModel();
      this.router.navigate(['/login']);
    }, err => {
      (console.log("Erro ao cadastrar", err));
    })
  }

}
