import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { DataBaseService, ImageData } from '../datastore/database.service';
import { MatDateFormats, NativeDateAdapter, DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { Router } from '@angular/router';


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
  selector: 'image-tables',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
  providers: [
    {provide: DateAdapter, useClass: AppDateAdapter},
    {provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS}
  ]
})


export class ImageComponent implements OnInit, AfterViewInit {
  startDate : Date;
  endDate : Date;
  searchFlightName : string;
  searchLocation : string;

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

  constructor(public dataBase : DataBaseService,
              private router : Router) {}
  ngAfterViewInit(): void {
    
  }

  images: Array<ImageData> = [];
  dataSource : Array<ImageData> = [];
  ngOnInit() {
    this.dataSource = this.images = this.dataBase.getImageData();
    this.searchFlightName = this.searchLocation = "";
    this.getMatchedFlightNames();
    this.getMatchedLocations();
  }

  applyFilter() {
    let newData = [];
    for (var row of this.dataSource) {
        let date = this.dataBase.getDateByFlightId(row.flightId);
        let flightName = this.dataBase.getFlightNameByFlightId(row.flightId);
        if (row.location.includes(this.searchLocation)) {
          if (flightName.includes(this.searchFlightName)) {
            if (this.isSmaller(this.startDate, date) && this.isLarger(this.endDate, date)) {
                newData.push(row);
            }
          }
        }
    }
    this.images = newData;
  }

  matchedFlightNames : Array<String>;
  matchedLocations : Array<String>;

  getMatchedFlightNames() {
    this.matchedFlightNames = [];
    for (var row of this.dataBase.flightList) {
      if (row.flightName.includes(this.searchFlightName)) {
        this.matchedFlightNames.push(row.flightName);
      }
    }
  }

  getMatchedLocations() {
    this.matchedLocations = [];
    for (var row of this.dataSource) {
      if (row.location.includes(this.searchLocation)) {
        this.matchedLocations.push(row.location);
      }
    }
    this.matchedLocations = this.matchedLocations.filter((x, i, a) => a.indexOf(x) === i);
  }

  navigateToCompare() {
    this.router.navigate(['image/compare']);
  }
}
