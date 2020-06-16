import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import { NativeDateAdapter, MatDateFormats, DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { MatTableDataSource } from '@angular/material/table';
import { AssignmentData, DataBaseService } from '../datastore/database.service';

export class AppDateAdapter extends NativeDateAdapter {
  format(date: Date, displayFormat: Object): string {
    if (displayFormat === 'input') {
      let day: string = date.getDate().toString();
      day = +day < 10 ? '0' + day : day;
      let month: string = (date.getMonth() + 1).toString();
      month = +month < 10 ? '0' + month : month;
      let year = date.getFullYear();
      return `${day}/${month}/${year}`;
    }
    return date.toDateString();
  }
}

export const APP_DATE_FORMATS: MatDateFormats = {
  parse: {
    dateInput: { month: 'short', year: 'numeric', day: 'numeric' },
  },
  display: {
    dateInput: 'input',
    monthYearLabel: { year: 'numeric', month: 'numeric' },
    dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric'
    },
    monthYearA11yLabel: { year: 'numeric', month: 'long' },
  }
};

@Component({
  selector: 'assignment-tables',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.scss'],
  providers: [
    {provide: DateAdapter, useClass: AppDateAdapter},
    {provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS}
  ]
})


export class AssignmentComponent implements OnInit, AfterViewInit {
  displayedColumns = ['userId', 'startDate', 'completeDate', 'location', 'description', 'column', 'status'];
  dataSource: Array<AssignmentData>;
  dataTable : MatTableDataSource<AssignmentData>
  selection: SelectionModel<AssignmentData>;
  startDate : Date;
  endDate : Date;
  searchUserId : string;
  seachStatus : number;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(public dialog: MatDialog,
              public datepipe: DatePipe,
              public dataBase : DataBaseService) {}

  ngOnInit() {
    this.selection = new SelectionModel<AssignmentData>(true, []);
    this.dataSource = this.dataBase.getAssignmentData();
    this.dataTable = new MatTableDataSource(this.dataSource);
    this.searchUserId = "";
    this.seachStatus = -1;
  }

  ngAfterViewInit() {
    this.dataTable.paginator = this.paginator;
    this.dataTable.sort = this.sort;
  }

  isSmaller(date : Date, dateString : string) : boolean {
    let fulldate = dateString.split('/');
    let dateTime = new Date(Number(fulldate[2]), Number(fulldate[1]) - 1, Number(fulldate[0]));
    return date == null ? true : date <= dateTime;
  }

  isLarger(date : Date, dateString : string) : boolean {
    let fulldate = dateString.split('/');
    let dateTime = new Date(Number(fulldate[2]), Number(fulldate[1]) - 1, Number(fulldate[0]));
    return date == null ? true : date >= dateTime;
  }

  applyFilter() {
    console.log(this.searchUserId);
    let newData = [];
    for (var row of this.dataSource) {
        if (this.seachStatus == row.status || this.seachStatus == -1) {
          if (+this.searchUserId == row.userId || this.searchUserId == "") {
            if (this.isSmaller(this.startDate, row.startDate) && this.isLarger(this.endDate, row.startDate)) {
                newData.push(row);
            }
          }
        }
    }
    this.dataTable.data = newData;
    this.dataTable._updateChangeSubscription();
  }

  applyFilterByUserId(seachId) {
    this.searchUserId = seachId;
    this.applyFilter();
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataTable.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.forEach(row => this.selection.select(row));
  }
}
