import { Component, OnInit, ViewChild, AfterViewInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, Validators, FormControl, FormBuilder, AbstractControl } from '@angular/forms';



@Component({
  selector: 'confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})


export class ConfirmationDialog {

  constructor(public dialogRef: MatDialogRef<ConfirmationDialog>,
              @Inject(MAT_DIALOG_DATA) public data: string) {}
  
  response : String;
  decline(): void {
    this.dialogRef.close('decline');
  }

  accept() : void {
    this.dialogRef.close('accept');
  }

  ngOninit() {
    this.response = 'accept';
  }
  
}
