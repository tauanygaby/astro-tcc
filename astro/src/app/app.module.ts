import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlocoComponent } from './blocoFerramentas/BlocoComponent.component';
import { EditorComponent } from './editor/editor.component';
import { CadastroComponent } from './modules/cadastro/cadastro.component';
import { ChecklistComponent } from './modules/checklist/checklist.component';
import { EditorTextoComponent } from './modules/editor-texto/editor-texto.component';
import { FerramentasComponent } from './modules/ferramentas/ferramentas.component';
import { HomeComponent } from './modules/home/pages/home.component';
import { LoginComponent } from './modules/login/login.component';
import { UserComponent } from './modules/user/user.component';
import { CrudService } from './service/crud.service';
import { SharedModule } from './shared/shared.module';


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
    ChecklistComponent
  ],
  imports: [
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
    CKEditorModule
  ],
  providers: [CrudService, HttpClientModule, Location],
  bootstrap: [AppComponent]
})
export class AppModule { }
