import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlocoComponent } from './modules/blocoFerramentas/BlocoComponent.component';
import { CadastroComponent } from './modules/cadastro/cadastro.component';
import { HomeComponent } from './modules/home/pages/home.component';
import { LoginComponent } from './modules/login/login.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'blocoFerramentas', component: BlocoComponent },
  { path: 'home', component: HomeComponent },
  { path: '', pathMatch: 'full', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
