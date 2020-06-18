import { Component, OnInit, ViewChild, AfterViewInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DroneData } from '../../datastore/database.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';



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
  
  droneForm = new FormGroup({
    model : new FormControl('', [Validators.required]),
    height : new FormControl('', [Validators.required]),
    weight : new FormControl('', [Validators.required]),
    battery : new FormControl('', [Validators.required]),
    flight_time : new FormControl('', [Validators.required]),
    speed : new FormControl('', [Validators.required])
  });
}
