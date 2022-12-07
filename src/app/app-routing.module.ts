import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './../guard/auth.guard';
import { CadastroComponent } from './modules/cadastro/cadastro.component';
import { ChecklistComponent } from './modules/checklist/checklist.component';
import { DiarioDeBordoComponent } from './modules/diario-de-bordo/diario-de-bordo.component';
import { EditorTextoComponent } from './modules/editor-texto/editor-texto.component';
import { FerramentasComponent } from './modules/ferramentas/ferramentas.component';
import { FichamentoComponent } from './modules/fichamento/fichamento.component';
import { GerenciadorTarefasComponent } from './modules/gerenciadorTarefas/gerenciador-tarefas.component';
import { HomeComponent } from './modules/home/pages/home.component';
import { LoginComponent } from './modules/login/login.component';
import { MeusProjetosComponent } from './modules/meus-projetos/meus-projetos.component';
import { ModelosPreDefinidosComponent } from './modules/modelos-pre-definidos/modelos-pre-definidos.component';
import { PlanoDePesquisaComponent } from './modules/plano-de-pesquisa/plano-de-pesquisa.component';
import { UserComponent } from './modules/user/user.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user/:email', component: UserComponent, canActivate: [AuthGuard] },
  { path: 'ferramentas', component: FerramentasComponent, canActivate: [AuthGuard] },
  { path: 'editor', component: EditorTextoComponent, canActivate: [AuthGuard] },
  { path: 'checklist', component: ChecklistComponent, canActivate: [AuthGuard] },
  { path: 'diarioDeBordo', component: DiarioDeBordoComponent, canActivate: [AuthGuard] },
  { path: 'planoDePesquisa', component: PlanoDePesquisaComponent, canActivate: [AuthGuard] },
  { path: 'fichamento', component: FichamentoComponent, canActivate: [AuthGuard] },
  { path: 'meusTrabalhos', component: MeusProjetosComponent, canActivate: [AuthGuard] },
  { path: 'modeloDefinido', component: ModelosPreDefinidosComponent, canActivate: [AuthGuard] },
  { path: 'trello', component: GerenciadorTarefasComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent},
  { path: 'cadastro', component: CadastroComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
