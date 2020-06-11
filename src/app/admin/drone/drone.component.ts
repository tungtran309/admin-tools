import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { DataBaseService, DroneData } from '../datastore/database.service';




@Component({
  selector: 'drone-tables',
  templateUrl: './drone.component.html',
  styleUrls: ['./drone.component.scss']
})


export class DroneComponent implements OnInit, AfterViewInit {
  displayedColumns = ['id', 'model', 'height', 'weight', 'battery', 'flight_time', 'speed', 'image'];
  dataSource: Array<DroneData>;
  dataTable : MatTableDataSource<DroneData>
  selection: SelectionModel<DroneData>;
  droneSearch : DroneData;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(public dataBase : DataBaseService) {}

  ngOnInit() {
    this.selection = new SelectionModel<DroneData>(true, []);
    this.dataSource = this.dataBase.getDroneData();
    this.dataTable = new MatTableDataSource(this.dataSource);
    this.droneSearch = {id : 0, model : '', height : 0, weight : 0, battery : 0, flight_time : 0, speed : 0, image : ''};
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
