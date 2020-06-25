import { Component, OnInit, ViewChild, AfterViewInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DroneData, DataBaseService } from '../../datastore/database.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/notification.service';



@Component({
  selector: 'drone-detail',
  templateUrl: './droneDetail.component.html',
  styleUrls: ['./droneDetail.component.scss']
})


export class DroneDetailComponent {

  colorsDistance: any = [{
    backgroundColor:"#F00",
    hoverBackgroundColor:"#FF0",
    borderColor:"#0F0",
    hoverBorderColor:"#00F"
  }];

  colorsTime: any = [{
    backgroundColor:"#0FF",
    hoverBackgroundColor:"#FF0",
    borderColor:"#0F0",
    hoverBorderColor:"#00F"
  }];

  colorsHistory : any = [{
    backgroundColor:"#F00",
    hoverBackgroundColor:"#FF0",
    borderColor:"#0F0",
    hoverBorderColor:"#00F"
  }, {
    backgroundColor:"#0FF",
    hoverBackgroundColor:"#FF0",
    borderColor:"#0F0",
    hoverBorderColor:"#00F"
  }];

  barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  barChartLabels: string[] = [ '12/2019', '1/2020', '2/2020', '3/2020', '4/2020', '5/2020', '6/2020' ];
  barChartType = 'bar';
  barChartLegend = true;
  barChartData: any[] = [
    { data: [90, 590, 800, 810, 560, 553, 400, 394], label: 'Giờ bay (phút)' }
  ];

  barChartHistory: any[] = [
    { data: [1, 1, 0, 2, 1, 1, 3, 1], label: 'Hỏng (lần)' },
    { data: [4, 1, 2, 4, 2, 3, 4, 2], label: 'Bảo hành (lần)' },
  ];

  barChartDistance : any[] = [
    { data: [5, 55, 60, 91, 44, 31, 20, 15], label: 'Khoảng cách (km)' }
  ];


  // Line Chart
  lineChartImage: Array<any> = [
    { data: [95, 495, 572, 369, 701, 203, 255], label: 'Số ảnh chụp (ảnh)' }
  ];

  lineChartIncident: Array<any> = [
    { data: [5, 3, 7, 6, 15, 2, 1], label: 'Số sự cố (ảnh)' }
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
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    {
      // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    {
      // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  lineChartLegend = true;
  lineChartType = 'line';

  chartClicked(e: any): void {
    console.log(e.active);
    console.log(e.event);
  }

  chartHovered(e: any): void {
    console.log(e);
  }
  public data : DroneData;
  constructor(private route: ActivatedRoute,
              public dataBase : DataBaseService,
              private router: Router,
              private notificationService : NotificationService) {}
  
  droneForm = new FormGroup({
    model : new FormControl('', [Validators.required]),
    height : new FormControl('', [Validators.required]),
    weight : new FormControl('', [Validators.required]),
    battery : new FormControl('', [Validators.required]),
    flight_time : new FormControl('', [Validators.required]),
    speed : new FormControl('', [Validators.required])
  });

  fileToUpload: File = null;

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    this.data.image = 'assets/images/' + this.fileToUpload.name;
  }

  saveData() {
    this.dataBase.updateDroneById(this.data);
    this.router.navigate(['/drone']);
  }

  public id: string;
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.data = this.dataBase.getDroneDataById(+this.id);
    console.log(this.dataBase.COLOR_STATUS[1]);
    if (this.data.id % 6 == 1) {
      this.notificationService.showInfo("", "Drone sắp hết pin", 7000);
    }
    if (this.data.id % 6 == 2) {
      this.notificationService.showInfo("", "Drone đã quá 30 ngày chưa được bảo trì", 7000);
    }
    // this.data = {id : 0, model : "", height : 0, weight : 0, battery : 0, flight_time : 0, speed : 0, image : ""}
  }



}
