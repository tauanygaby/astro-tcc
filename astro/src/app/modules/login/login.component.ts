import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild('loginRef', { static: true }) loginElement!: ElementRef;
  
  aluno: AlunoModel = new AlunoModel();
  bsModalRef: BsModalRef;
  form!: FormGroup;
  title =  'Codingvila Login With Google' ;
  auth2:  any ;

  constructor(private crudService: CrudService, private router: Router, private modalService: BsModalService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: [null, Validators.required],
      senha: [null, Validators.required],
    })
    this.googleAuthSDK();
  }

  callLogin() {

    this.auth2.attachClickHandler(this.loginElement.nativeElement, {},
      (googleAuthUser: any) => {

        //Print profile details in the console logs

        let profile = googleAuthUser.getBasicProfile();
        console.log('Token || ' + googleAuthUser.getAuthResponse().id_token);
        console.log('ID: ' + profile.getId());
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());

        this.crudService.getUser(profile.getEmail().value).subscribe(aluno => {
          this.router.navigate(['/user/' + profile.getEmail().value]);
          this.aluno = new AlunoModel();
          console.log(this.aluno);
        });

      }, (error: any) => {
        alert(JSON.stringify(error, undefined, 2));
      });

  }

  googleAuthSDK() {

    (<any>window)['googleSDKLoaded'] = () => {
      (<any>window)['gapi'].load('auth2', () => {
        this.auth2 = (<any>window)['gapi'].auth2.init({
          client_id: '261944408406-p1lf8j8v9saque7v3qpno7o2ah0llufn.apps.googleusercontent.com',
          plugin_name:'login',
          cookiepolicy: 'single_host_origin',
          scope: 'profile email'
        });
        this.callLogin();
      });
    }

    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }
      js = d.createElement('script');
      js.id = id;
      js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'google-jssdk'));
  }
  
  entrar() {
    this.handleSuccess()
    console.log(this.aluno);
    this.crudService.getUser(this.aluno.email).subscribe(aluno => {
      this.router.navigate(['/user/' + this.aluno.email]);
      this.aluno = new AlunoModel();
      console.log(this.aluno);
      
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

  handleSuccess() {
    this.bsModalRef = this.modalService.show(AlertModalComponent);
    this.bsModalRef.content.type = 'success';
    this.bsModalRef.content.message = 'login realizado com sucesso';
  }

  verificaValidTouched(campo: string) {
    return this.form.get(campo) && this.form.get(campo).touched && !this.form.get(campo).valid
  }
}
