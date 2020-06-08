import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import { NativeDateAdapter, MatDateFormats, DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { MatTableDataSource } from '@angular/material/table';


export interface AssignmentData {
    userId : number;
    startDate : string;
    completeDate : string;
    location : string;
    description : string;
    column : string;
    status : string;
}

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
  userId : number;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(public dialog: MatDialog,
              public datepipe: DatePipe) {}

  ngOnInit() {
    this.selection = new SelectionModel<AssignmentData>(true, []);
    this.dataSource = [{userId : 1, startDate : '25/05/2020', completeDate : '01/06/2020', location : "Đại học Bách Khoa", description : "Sửa dây điện", column : "N3E8", status : "Đã hoàn thành"}
                      ,{userId : 2, startDate : '27/05/2020', completeDate : '05/06/2020', location : "Cầu Vĩnh Tuy", description : "Thay cột mới", column : "P1Q2", status : "Đã hoàn thành"}
                      ,{userId : 2, startDate : '27/05/2020', completeDate : '07/06/2020', location : "Đại học Bách Khoa", description : "Sửa cột", column : "P1Q2", status : "Đã hoàn thành"}
                      ,{userId : 3, startDate : '25/05/2020', completeDate : '', location : "Cầu Vĩnh Tuy", description : "Sửa dây điện", column : "N3E8", status : "Đang kiểm tra"}
                      ,{userId : 4, startDate : '27/05/2020', completeDate : '', location : "Cầu Vĩnh Tuy", description : "Kiểm tra cột", column : "N6F7", status : "Đang kiểm tra"}
                      ,{userId : 5, startDate : '27/05/2020', completeDate : '', location : "Đại học Bách Khoa", description : "Kiểm tra cột", column : "P1Q2", status : "Đang sửa chữa"}
                      ,{userId : 1, startDate : '25/05/2020', completeDate : '', location : "Đại học Bách Khoa", description : "Tháo dây điện", column : "N6F7", status : "Đang sửa chữa"}
                      ,{userId : 6, startDate : '25/05/2020', completeDate : '', location : "Cầu Vĩnh Tuy", description : "Nâng cấp cột", column : "Q3T2", status : "Đang sửa chữa"}
                      ,{userId : 5, startDate : '27/05/2020', completeDate : '01/06/2020', location : "Đại học Bách Khoa", description : "Hàn mối nối", column : "N3E8", status : "Đã hoàn thành"}
                      ,{userId : 7, startDate : '22/05/2020', completeDate : '02/06/2020', location : "Đại học Xây Dựng", description : "Hàn mối nối", column : "L1M1", status : "Đã hoàn thành"}
                      ,{userId : 8, startDate : '22/05/2020', completeDate : '02/06/2020', location : "Đại học Xây Dựng", description : "Hàn mối nối", column : "N6F7", status : "Đã hoàn thành"}
                      ,{userId : 9, startDate : '25/05/2020', completeDate : '', location : "Đại học Xây Dựng", description : "Kiểm tra cột", column : "L1M1", status : "Đang sửa chữa"}
                      ,{userId : 1, startDate : '22/05/2020', completeDate : '01/06/2020', location : "Đại học Bách Khoa", description : "Kiểm tra cột", column : "L1M1", status : "Đã hoàn thành"}
                      ,{userId : 10, startDate : '25/05/2020', completeDate : '07/06/2020', location : "Đại học Bách Khoa", description : "Thay biến áp", column : "Q3T2", status : "Đã hoàn thành"}
                      ,{userId : 2, startDate : '22/05/2020', completeDate : '04/06/2020', location : "Đại học Xây Dựng", description : "Hàn mối nối", column : "Q3T2", status : "Đã hoàn thành"}
                      ,{userId : 5, startDate : '22/05/2020', completeDate : '', location : "Đại học Xây Dựng", description : "Hàn mối nối", column : "Q3T2", status : "Đang kiểm tra"}];
    this.dataTable = new MatTableDataSource(this.dataSource);
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
    console.log(this.userId);
    let newData = [];
    for (var row of this.dataSource) {
        if (this.userId == row.userId || this.userId == null) {
          if (this.isSmaller(this.startDate, row.startDate) && this.isLarger(this.endDate, row.startDate)) {
              newData.push(row);
          }
        }
    }
    this.dataTable.data = newData;
    this.dataTable._updateChangeSubscription();
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
