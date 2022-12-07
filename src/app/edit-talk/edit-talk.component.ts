import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { appConstants } from '../modules/gerenciadorTarefas/appConstants';
import { Talk } from '../modules/schema.model';

@Component({
  selector: 'app-edit-talk',
  templateUrl: './edit-talk.component.html',
  styleUrls: ['./edit-talk.component.css']
})
export class EditTalkComponent implements OnInit {

  formGroup: FormGroup;
  issueTypesArrayWithColor = Object.values(appConstants.issueTypeListWithColor);

  constructor(@Inject(MAT_DIALOG_DATA) public data: { talk: Talk, edit: boolean },
    private dialogRef: MatDialogRef<EditTalkComponent>,
    public formBuilder: FormBuilder,
    public colorPickerdialog: MatDialog) { }

  ngOnInit() {
    const talk = this.data && this.data.talk ? this.data.talk : null;
    this.formGroup = this.formBuilder.group({
      text: [talk && talk.text ? talk.text : '', Validators.required],
      speaker: [talk && talk.speaker ? talk.speaker : '', Validators.required],
      image: [talk && talk.image ? talk.image : ''],
      tags: [talk && talk.tags ? talk.tags : []],
      issueType: [talk && talk.issueType ? talk.issueType : ''],
      createdAt: [talk && talk.createdAt ? talk.createdAt : new Date()]
    });
  }

  onSubmit() {
    this.dialogRef.close(this.formGroup.value);
  }



}
