import { DragDropModule } from '@angular/cdk/drag-drop';
import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatChipsModule, MatCommonModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatOptionModule, MatSelectModule, MatSidenavModule, MatSliderModule, MatToolbarModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlocoComponent } from './blocoFerramentas/BlocoComponent.component';
import { CardTarefaComponent } from './card-tarefa/card-tarefa.component';
import { ColorPickerDialogComponent } from './color-picker-dialog/color-picker-dialog.component';
import { DeleteTalkComponent } from './delete-talk/delete-talk.component';
import { DrawerComponent } from './drawer/drawer.component';
import { EditTalkComponent } from './edit-talk/edit-talk.component';
import { EditorComponent } from './editor/editor.component';
import { CadastroComponent } from './modules/cadastro/cadastro.component';
import { ChecklistComponent } from './modules/checklist/checklist.component';
import { DiarioDeBordoComponent } from './modules/diario-de-bordo/diario-de-bordo.component';
import { EditorTextoComponent } from './modules/editor-texto/editor-texto.component';
import { FerramentasComponent } from './modules/ferramentas/ferramentas.component';
import { GerenciadorTarefasComponent } from './modules/gerenciadorTarefas/gerenciador-tarefas.component';
import { HomeComponent } from './modules/home/pages/home.component';
import { LoginComponent } from './modules/login/login.component';
import { ModelosPreDefinidosComponent } from './modules/modelos-pre-definidos/modelos-pre-definidos.component';
import { UserComponent } from './modules/user/user.component';
import { CrudService } from './service/crud.service';
import { SharedModule } from './shared/shared.module';
import {MatPaginatorModule} from '@angular/material/paginator';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { PlanoDePesquisaComponent } from './modules/plano-de-pesquisa/plano-de-pesquisa.component';
import { RelatorioDePesquisaComponent } from './modules/relatorio-de-pesquisa/relatorio-de-pesquisa.component';
import { FichamentoComponent } from './modules/fichamento/fichamento.component';
import { MeusProjetosComponent } from './modules/meus-projetos/meus-projetos.component';
import { TermosDePoliticaComponent } from './modules/termos-de-politica/termos-de-politica.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    BlocoComponent,
    CadastroComponent,
    FerramentasComponent,
    UserComponent,
    EditorComponent,
    EditorTextoComponent,
    ChecklistComponent,
    DiarioDeBordoComponent,
    ModelosPreDefinidosComponent,
    GerenciadorTarefasComponent,
    CardTarefaComponent,
    DrawerComponent,
    EditTalkComponent,
    DeleteTalkComponent,
    ColorPickerDialogComponent,
    PlanoDePesquisaComponent,
    RelatorioDePesquisaComponent,
    FichamentoComponent,
    MeusProjetosComponent,
    TermosDePoliticaComponent
  ],
  imports: [
    MatDialogModule,
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularEditorModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    SharedModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatChipsModule,
    MatInputModule,
    MatMenuModule,
    MatOptionModule,
    MatSelectModule,
    DragDropModule,
    LayoutModule,
    ReactiveFormsModule,
    MatCommonModule,
    FlexLayoutModule,
    CommonModule,
    MatFormFieldModule,
    FormsModule,
    MatSliderModule,
    MatPaginatorModule,
    CdkAccordionModule
  ],
  entryComponents: [EditTalkComponent, DeleteTalkComponent],
  providers: [CrudService, HttpClientModule, Location],
  bootstrap: [AppComponent]
})
export class AppModule { }
