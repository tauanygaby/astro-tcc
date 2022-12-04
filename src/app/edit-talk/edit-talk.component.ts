import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { appConstants } from '../modules/gerenciadorTarefas/appConstants';
import { Task } from '../modules/schema.model';

@Component({
  selector: 'app-edit-talk',
  templateUrl: './edit-talk.component.html',
  styleUrls: ['./edit-talk.component.css']
})
export class EditTalkComponent implements OnInit {

  formGroup: FormGroup;
  issueTypesArrayWithColor = Object.values(appConstants.issueTypeListWithColor);

  constructor(@Inject(MAT_DIALOG_DATA) public data: { talk: Task, edit: boolean },
    private dialogRef: MatDialogRef<EditTalkComponent>,
    public formBuilder: FormBuilder,
    public colorPickerdialog: MatDialog) { }

  ngOnInit() {
    const talk = this.data && this.data.talk ? this.data.talk : null;
    this.formGroup = this.formBuilder.group({
      descricao: [talk && talk.descricao ? talk.descricao : '', Validators.required],
      responsavel: [talk && talk.responsavel ? talk.responsavel : '', Validators.required],
      image: [talk && talk.image ? talk.image : ''],
      tags: [talk && talk.tipo ? talk.tipo : []]
    });
  }

  onSubmit() {
    this.dialogRef.close(this.formGroup.value);
  }



}
