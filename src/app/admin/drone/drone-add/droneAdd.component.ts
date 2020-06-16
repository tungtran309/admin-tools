import { Component, OnInit, ViewChild, AfterViewInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DroneData } from '../../datastore/database.service';



@Component({
  selector: 'drone-add',
  templateUrl: './droneAdd.component.html',
  styleUrls: ['./droneAdd.component.scss']
})


export class DroneAddDialog {

  constructor(
    public dialogRef: MatDialogRef<DroneAddDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DroneData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  
}
