import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/service/usuario.service';
import { CrudService } from '../../service/crud.service';
import { AlunoModel } from '../aluno.model';
import { ResponseUpdate } from './../aluno-update.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{

  email: string;
  aluno: AlunoModel = new AlunoModel();
  updateAluno: ResponseUpdate = new ResponseUpdate();
  
  constructor(private crudService: CrudService, private activatedRouter: ActivatedRoute, public location: Location,
    private http: HttpClient, private usuarioService: UsuarioService, private router: Router) { }
  
  ngOnInit() {
    this.email = this.activatedRouter.snapshot.paramMap.get('email');
    this.crudService.getUser(this.email).subscribe(res => {
      this.updateAluno = {
        id: res.aluno.id,
        nome: res.aluno.nome,
        nickname: res.aluno.nickname,
        senha: res.aluno.senha,
        instituicao: res.aluno.instituicao,
        foto: res.aluno.foto
      }
      console.log(this.updateAluno);
    })
  }

  load() {
    location.reload()
  }
  
  atualizar() {
    console.log(this.updateAluno);
    this.crudService.atualizarAluno(this.email, this.updateAluno).subscribe(aluno => {
      this.updateAluno = new ResponseUpdate();
      this.load();
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
  //img
  url="././assets/img/user.png";

  inputFileChange(event){
    if (event.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload=(event:any)=>{
        this.url=event.target.result;
          }
        }
  }
  logout() {
    this.usuarioService.deslogar()
    console.log(this.usuarioService.deslogar());
  }

  public pageUser() {
    this.router.navigate(['/user/' + this.usuarioService.obterIdUsuarioLogado()]);
  }
  
}
