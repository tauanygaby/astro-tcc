import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './modules/cadastro/cadastro.component';
import { ChecklistComponent } from './modules/checklist/checklist.component';
import { DiarioDeBordoComponent } from './modules/diario-de-bordo/diario-de-bordo.component';
import { EditorTextoComponent } from './modules/editor-texto/editor-texto.component';
import { FerramentasComponent } from './modules/ferramentas/ferramentas.component';
import { HomeComponent } from './modules/home/pages/home.component';
import { LoginComponent } from './modules/login/login.component';
import { ModelosPreDefinidosComponent } from './modules/modelos-pre-definidos/modelos-pre-definidos.component';
import { TrelloComponent } from './modules/trello/trello.component';
import { UserComponent } from './modules/user/user.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'ferramentas', component: FerramentasComponent },
  { path: 'home', component: HomeComponent },
  { path: 'editor', component: EditorTextoComponent },
  { path: 'user/:email', component: UserComponent},
  { path: 'checklist', component: ChecklistComponent },
  { path: 'diarioDeBordo', component: DiarioDeBordoComponent },
  { path: 'modeloDefinido', component: ModelosPreDefinidosComponent },
  { path: 'trello', component: TrelloComponent },
  { path: '', pathMatch: 'full', redirectTo: '/home' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
