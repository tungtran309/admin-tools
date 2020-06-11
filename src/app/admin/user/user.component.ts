import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material/dialog';
import { UserAddDialog, UserData } from './user-add/userAdd.component';
import { DataBaseService } from '../datastore/database.service';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'user-tables',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})


export class UserComponent implements OnInit, AfterViewInit {
  displayedColumns = ['select', 'id', 'name', 'age', 'gender', 'department', 'occupation'];
  dataSource: Array<UserData>;
  dataTable : MatTableDataSource<UserData>
  selection: SelectionModel<UserData>;
  userSearch : UserData;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(public dialog: MatDialog,
              public dataBase : DataBaseService) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(UserAddDialog, {
      width: '540px',
      height: '360px',
      data : {id : "", name : "", age : "", gender: "", department : "", occupation : ""}
    });

    dialogRef.afterClosed().subscribe(result => {
        this.dataBase.addUser(result);
        this.dataSource = this.dataBase.getUserData();
        this.applyFilter();
    });
  }

  ngOnInit() {
    this.selection = new SelectionModel<UserData>(true, []);
    this.dataSource = this.dataBase.getUserData();
    this.dataTable = new MatTableDataSource(this.dataSource);
    this.userSearch = {id : 0, name : "", age : 0, gender : "", department : "", occupation : ""};
  }

  ngAfterViewInit() {
    
  }

  applyFilter() {
    console.log(this.userSearch);
    this.dataTable.data = [];
    for (var row of this.dataSource) {
        let isMatched : boolean = true;
        if (!row.name.includes(this.userSearch.name) && this.userSearch.name != "") {
            isMatched = false;
        }
        if (!row.department.includes(this.userSearch.department) && this.userSearch.department != "") {
          isMatched = false;
        }
        if (!row.occupation.includes(this.userSearch.occupation) && this.userSearch.occupation != "") {
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
