import { Component, OnInit, ViewChild, AfterViewInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserData } from '../../datastore/database.service';



@Component({
  selector: 'user-add',
  templateUrl: './userAdd.component.html',
  styleUrls: ['./userAdd.component.scss']
})


export class UserAddDialog {

  constructor(
    public dialogRef: MatDialogRef<UserAddDialog>,
    @Inject(MAT_DIALOG_DATA) public data: UserData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  
}
