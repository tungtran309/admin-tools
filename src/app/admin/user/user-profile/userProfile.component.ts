import { Component, OnInit, ViewChild, AfterViewInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserData, DataBaseService } from '../../datastore/database.service';
import { FormGroup, Validators, FormControl, FormBuilder, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/notification.service';



@Component({
  selector: 'user-profile',
  templateUrl: './userProfile.component.html',
  styleUrls: ['./userProfile.component.scss']
})


export class UserProfileComponent implements OnInit {

  lineChartAssignment: Array<any> = [
    { data: [10, 9, 15, 22, 17, 11, 17], label: 'Được giao' },
    { data: [9, 5, 14, 19, 14, 11, 11], label: 'Hoàn thành' }
  ];
  lineChartLabels: Array<any> = [
    '12/2019',
    '1/2020',
    '2/2020',
    '3/2020',
    '4/2020',
    '5/2020',
    '6/2020'
  ];
  lineChartOptions: any = {
    responsive: true
  };
  lineChartColors: Array<any> = [
    {
      // grey
      backgroundColor: 'rgba(255, 0, 0, 0.3)',
      borderColor: 'rgba(255, 0, 0, 0.8)',
      pointBackgroundColor: 'rgba(255, 0, 0, 0.3)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255, 0, 0, 0.8)'
    },
    {
      // dark grey
      backgroundColor: 'rgba(0, 0, 255, 0.3)',
      borderColor: 'rgba(0, 0, 255, 0.8))',
      pointBackgroundColor: 'rgba(0, 0, 255, 0.3)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(0, 0, 255, 0.8)'
    }
  ];
  lineChartLegend = true;
  lineChartType = 'line';


  // pie chart
  pieChartLabels: string[] = ['Đang thực hiện', 'Đã hoàn thành', 'Đang kiểm tra'];
  pieChartData: number[] = [4, 11, 2];
  pieChartType = 'pie';

  chartClicked(e: any): void {
    console.log(e.active);
    console.log(e.event);
  }

  chartHovered(e: any): void {
    console.log(e);
  }

  public data : UserData;
  public userForm : FormGroup;
  constructor(public dataBase : DataBaseService,
              private route: ActivatedRoute,
              private router : Router,
              private notificationService : NotificationService) {}
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.data = this.dataBase.getUserDataById(+this.id);
    console.log(this.data);
    this.userForm = new FormGroup({
      email : new FormControl('', [Validators.required, Validators.email]),
      image : new FormControl('', []),
      name : new FormControl('', [Validators.required]),
      age : new FormControl('', [Validators.required, Validators.min(15), Validators.max(100)]),
      gender : new FormControl('', [Validators.required]),
      occupation : new FormControl('', [Validators.required]),
      department : new FormControl('', [Validators.required])
    });
    console.log(this.id);
  }

  saveUser(): void {
    console.log(this.data);
    this.dataBase.updateUserById(this.data);
    this.notificationService.showSuccess("Lưu thành công", "");
    if (localStorage.getItem('isAdmin') == 'true') {
      this.router.navigate(['/user']);
    }
  }

  userList = this.dataBase.getUserData();

  duplicatedEmail(control: AbstractControl): { [key: string]: boolean } | null {
    // console.log(this.dataBase.getUserData());
    // if (this.dataBase.checkDuplicatedEmail(control.value)) {
    //   return {'email' : false};
    // }
    for (var user of this.userList) {
      if (user.email == control.value) {
        return {'duplicated' : true};
      }
    }
    return null;
  }

  

  public id : String;
  

  getErrorMessage() {
    if (this.userForm.get('email').getError('duplicated')) {
      return 'Email đã được sử dụng';
    }
    if (this.userForm.get('email').hasError('required')) {
      return 'Bạn phải nhập email';
    }
    return this.userForm.get('email').hasError('email') ? 'Email không đúng' : '';
  }

  fileToUpload: File = null;
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    this.data.image = 'assets/images/' + this.fileToUpload.name;
  }
  
}
