import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from 'src/app/shared/alert-modal/alert-modal.component';
import { CrudService } from '../../service/crud.service';
import { AlunoModel } from '../aluno.model';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  aluno: AlunoModel = new AlunoModel();
  bsModalRef: BsModalRef;
  form!: FormGroup;

  constructor(private crudService: CrudService,
    private router: Router,
    private modalService: BsModalService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      nome: [null, Validators.required],
      nickname: [null, Validators.required],
      email: [null, Validators.required],
      senha: [null, Validators.required],
      instituicao: [null, Validators.required]
    })
  }

  cadastrar() {
    console.log(this.aluno);
    console.log(this.form.valid)
    this.handleSuccess();
    this.crudService.cadastrarAluno(this.aluno).subscribe(aluno => {
      this.aluno = new AlunoModel();
      this.router.navigate(['/login']);
    }, err => {
      (console.log("Erro ao cadastrar", err));
      this.handleError();
      this.form.reset()
    })
  }

  handleError() {
    this.bsModalRef = this.modalService.show(AlertModalComponent);
    this.bsModalRef.content.type = 'danger';
    this.bsModalRef.content.message = 'Erro: ao cadastrar aluno';
  }

  handleSuccess() {
    this.bsModalRef = this.modalService.show(AlertModalComponent);
    this.bsModalRef.content.type = 'success';
    this.bsModalRef.content.message = 'cadastro realizado com sucesso';
  }

  verificaValidTouched(campo: string) {
    return this.form.get(campo) && this.form.get(campo).touched && !this.form.get(campo).valid
  }

}
