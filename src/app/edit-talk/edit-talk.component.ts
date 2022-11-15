import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatChipInputEvent, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ColorPickerDialogComponent } from '../color-picker-dialog/color-picker-dialog.component';
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

  removeTag(tag: string) {
    // Remove the tag from the tag control's value.
    const tagsControl = this.formGroup.get('tags');
    tagsControl.value.splice(tagsControl.value.indexOf(tag), 1);
  }

  addTag(event: MatChipInputEvent) {
    const tagsControl = this.formGroup.get('tags');

    // Create a new array of tags, if the talk doesn't have any,
    // otherwise add the new tag to the existing array.
    if (tagsControl.value) {
      tagsControl.value.push({ name: event.value, color: '#e0e0e0' });
    } else {
      tagsControl.setValue([event.value]);
    }

    // Clear the input's value once the tag has been added.
    event.input.value = '';
  }

  openColorPickerDialog(tag): void {
    const dialogRef = this.colorPickerdialog.open(ColorPickerDialogComponent, {
      data: {},
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        tag.color = result;
      }
    });
  }
}
