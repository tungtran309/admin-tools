import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { DataBaseService, DroneData } from '../datastore/database.service';
import { MatDialog } from '@angular/material/dialog';
import { DroneAddDialog } from './drone-add/droneAdd.component';
import { FormControl } from '@angular/forms';
import { NotificationService } from 'src/app/shared/notification.service';
import { ConfirmationDialog } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';




@Component({
  selector: 'drone-tables',
  templateUrl: './drone.component.html',
  styleUrls: ['./drone.component.scss']
})


export class DroneComponent implements OnInit, AfterViewInit {
  displayedColumns = ['id', 'model', 'height', 'weight', 'battery', 'flight_time', 'speed', 'image', 'delete'];
  dataSource: Array<DroneData>;
  dataTable : MatTableDataSource<DroneData>
  selection: SelectionModel<DroneData>;
  droneSearch : DroneData;
  myControl = new FormControl();
  matchedModels : Array<String>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(public dialog: MatDialog,
              public dataBase : DataBaseService,
              public notifyService : NotificationService) {}
  deleteDrone(drone : any) {
    const dialogRef = this.dialog.open(ConfirmationDialog, {
      width: '350px',
      height: '200px',
      data : 'Bạn có chắc chắn muốn xóa ' + drone.model + ' ?'
    });

    dialogRef.afterClosed().subscribe(result => {
        if (result == 'accept') {
          this.dataBase.deleteDrone(drone);
          this.notifyService.showWarning("Xóa drone " + drone.model + " thành công", "Warning");
          this.dataSource = this.dataBase.getDroneData();
          this.applyFilter();
        }
    });
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DroneAddDialog, {
      width: '540px',
      height: '360px',
      data : {id : "", model : "", height : "", weight : "", battery : "", flight_time : 0, speed : "", image : ""}
    });

    dialogRef.afterClosed().subscribe(result => {
        if (result != undefined) {
          this.dataBase.addDrone(result);
          this.notifyService.showSuccess("Thêm drone thành công", "Success");
          this.dataSource = this.dataBase.getDroneData();
          this.applyFilter();
        }
    });
  }

  getMatchedModels() {
    this.matchedModels = [];
    for (var row of this.dataSource) {
      if (row.model.includes(this.droneSearch.model) || this.droneSearch.model == "") {
        this.matchedModels.push(row.model);
      }
    }
  }

  ngOnInit() {
    this.selection = new SelectionModel<DroneData>(true, []);
    this.dataSource = this.dataBase.getDroneData();
    this.dataTable = new MatTableDataSource(this.dataSource);
    this.droneSearch = {id : 0, model : '', height : 0, weight : 0, battery : 0, flight_time : 0, speed : 0, image : ''};
    this.getMatchedModels();
  }

  ngAfterViewInit() {
    this.dataTable.paginator = this.paginator;
    this.dataTable.sort = this.sort;
  }


  applyFilter() {
    console.log(this.droneSearch);
    this.dataTable.data = [];
    for (var row of this.dataSource) {
        let isMatched : boolean = true;
        if (!row.model.includes(this.droneSearch.model) && this.droneSearch.model != "") {
            isMatched = false;
        }
        if (isMatched) {
          this.dataTable.data.push(row);
        }
    }
    this.dataTable._updateChangeSubscription();
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.forEach(row => this.selection.select(row));
  }
}
