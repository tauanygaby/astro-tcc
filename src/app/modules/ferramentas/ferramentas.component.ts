import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-ferramentas',
  templateUrl: './ferramentas.component.html',
  styleUrls: ['./ferramentas.component.css']
})
export class FerramentasComponent implements OnInit {

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit() {
    console.log(this.usuarioService.obterIdUsuarioLogado());
  }

  public pageUser() {
    this.router.navigate(['/user/' + this.usuarioService.obterIdUsuarioLogado()]);
  }

  logout() {
    this.usuarioService.deslogar()
    console.log(this.usuarioService.deslogar());
  }

}
