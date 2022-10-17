import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CrudService } from 'src/app/service/crud.service';
import { AlertModalComponent } from 'src/app/shared/alert-modal/alert-modal.component';
import { AlunoModel } from '../aluno.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aluno: AlunoModel = new AlunoModel();
  bsModalRef: BsModalRef;
  form!: FormGroup;

  constructor(private crudService: CrudService, private router: Router, private modalService: BsModalService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: [null, Validators.required, Validators.email],
      senha: [null, Validators.required],
    })
  }

  entrar() {
    console.log(this.aluno);
    this.crudService.getUser(this.aluno.email).subscribe(aluno => {
      this.router.navigate(['/user/' + this.aluno.email]);
      this.aluno = new AlunoModel();
    }, err => {
      console.log("Erro ao entrar", err);
      this.handleError();
    })
  }

  handleError() {
    this.bsModalRef = this.modalService.show(AlertModalComponent);
    this.bsModalRef.content.type = 'danger';
    this.bsModalRef.content.message = 'Erro: senha ou email inválido(s)';
  }

  verificaValidTouched(campo: string) {
    return this.form.get(campo) && this.form.get(campo).touched && !this.form.get(campo).valid
  }
}
