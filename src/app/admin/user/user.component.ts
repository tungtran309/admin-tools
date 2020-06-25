import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material/dialog';
import { UserAddDialog } from './user-add/userAdd.component';
import { DataBaseService, UserData } from '../datastore/database.service';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl } from '@angular/forms';
import { NotificationService } from 'src/app/shared/notification.service';
import { ConfirmationDialog } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
import { Router } from '@angular/router';


@Component({
  selector: 'user-tables',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})


export class UserComponent implements OnInit, AfterViewInit {
  displayedColumns = ['id', 'email', 'name', 'age', 'gender', 'department', 'occupation', 'delete'];
  dataSource: Array<UserData>;
  dataTable : MatTableDataSource<UserData>
  selection: SelectionModel<UserData>;
  userSearch : UserData;
  myControl = new FormControl();
  matchedNames : Array<String>;
  matchedDepartments : Array<String>;
  matchedOccupations : Array<String>;


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(public dialog: MatDialog,
              public dataBase: DataBaseService,
              private notifyService : NotificationService,
              private router : Router) {}
  
  deleteUser(user : any) {
    const dialogRef = this.dialog.open(ConfirmationDialog, {
      width: '350px',
      height: '200px',
      data : 'Bạn có chắc chắn muốn xóa ' + user.name + ' ?'
    });

    dialogRef.afterClosed().subscribe(result => {
        if (result == 'accept') {
          this.dataBase.deleteUser(user);
          this.notifyService.showWarning("Xóa user " + user.name + " thành công", "Warning");
          this.dataSource = this.dataBase.getUserData();
          this.applyFilter();
        }
    });
  }
  
  openDialog(): void {
    const dialogRef = this.dialog.open(UserAddDialog, {
      width: '540px',
      height: '360px',
      data : {id : 0, email : "", name : "", age : "", gender: "", department : "", occupation : ""}
    });

    dialogRef.afterClosed().subscribe(result => {
        if (result != undefined) {
          this.dataBase.addUser(result);
          this.notifyService.showSuccess("Thêm user thành công", "Success");
          this.dataSource = this.dataBase.getUserData();
          this.applyFilter();
        }
    });
  }

  getMatchedNames() {
    this.matchedNames = [];
    for (var row of this.dataSource) {
      if (row.name.includes(this.userSearch.name) || this.userSearch.name == "") {
        this.matchedNames.push(row.name);
      }
    }
  }

  getMatchedDepartments() {
    this.matchedDepartments = [];
    for (var row of this.dataSource) {
      if (row.department.includes(this.userSearch.department) || this.userSearch.department == "") {
        this.matchedDepartments.push(row.department);
      }
    }
    this.matchedDepartments = this.matchedDepartments.filter((x, i, a) => a.indexOf(x) === i);
  }

  getMatchedOccupations() {
    this.matchedOccupations = [];
    for (var row of this.dataSource) {
      if (row.department.includes(this.userSearch.occupation) || this.userSearch.occupation == "") {
        this.matchedOccupations.push(row.occupation);
      }
    }
    this.matchedOccupations = this.matchedOccupations.filter((x, i, a) => a.indexOf(x) === i);
  }

  ngOnInit() {
    this.selection = new SelectionModel<UserData>(true, []);
    this.dataSource = this.dataBase.getUserData();
    this.dataTable = new MatTableDataSource(this.dataSource);
    this.userSearch = {id : 0, image : "", email: "", name : "", age : 0, gender : "", department : "", occupation : ""};
    this.getMatchedNames(); this.getMatchedDepartments(); this.getMatchedOccupations();
  }

  ngAfterViewInit() {
    this.dataTable.paginator = this.paginator;
    this.dataTable.sort = this.sort;
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

  navigateUserProfile(id : number) {
    this.router.navigate(['/user/profile/' + id]);
  }
}
