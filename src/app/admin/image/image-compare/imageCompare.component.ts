import { Component, OnInit, ViewChild, AfterViewInit, Inject } from '@angular/core';
import { ImageData, DataBaseService } from '../../datastore/database.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/notification.service';



@Component({
  selector: 'image-compare',
  templateUrl: './imageCompare.component.html',
  styleUrls: ['./imageCompare.component.scss']
})


export class ImageCompareComponent implements OnInit {
  constructor(private route: ActivatedRoute,
              public dataBase : DataBaseService,
              private router: Router,
              private notificationService : NotificationService) {}
  ngOnInit(): void {
    this.dataSource = this.images = this.images2 = this.dataBase.getImageData();
    this.searchFlightName = this.searchLocation = this.searchFlightName2 = this.searchLocation2 = "";
    this.getMatchedFlightNames();
    this.getMatchedLocations();
    this.getMatchedFlightNames2();
    this.getMatchedLocations2();
    console.log("here");
  }
  
  images: Array<ImageData> = [];
  images2: Array<ImageData> = [];
  dataSource : Array<ImageData> = [];
  saveData() {
    this.router.navigate(['/image']);
  }


  applyFilter() {
    let newData = [];
    for (var row of this.dataSource) {
        let date = this.dataBase.getDateByFlightId(row.flightId);
        let flightName = this.dataBase.getFlightNameByFlightId(row.flightId);
        if (row.location.includes(this.searchLocation)) {
          if (flightName.includes(this.searchFlightName)) {
            newData.push(row);
          }
        }
    }
    this.images = newData;

    let newData2 = [];
    for (var row of this.dataSource) {
        let date = this.dataBase.getDateByFlightId(row.flightId);
        let flightName = this.dataBase.getFlightNameByFlightId(row.flightId);
        if (row.location.includes(this.searchLocation2)) {
          if (flightName.includes(this.searchFlightName2)) {
            newData2.push(row);
          }
        }
    }
    this.images2 = newData2;
  }

  searchFlightName : string;
  searchLocation : string;
  matchedFlightNames : Array<String>;
  matchedLocations : Array<String>;

  getMatchedFlightNames() {
    this.matchedFlightNames = [];
    for (var row of DataBaseService.flightList) {
      if (row.flightName.includes(this.searchFlightName)) {
        this.matchedFlightNames.push(row.flightName);
      }
    }
    console.log(this.matchedFlightNames);
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


  searchFlightName2 : string;
  searchLocation2 : string;
  matchedFlightNames2 : Array<String>;
  matchedLocations2 : Array<String>;

  getMatchedFlightNames2() {
    this.matchedFlightNames2 = [];
    for (var row of DataBaseService.flightList) {
      if (row.flightName.includes(this.searchFlightName2)) {
        this.matchedFlightNames2.push(row.flightName);
      }
    }
  }

  getMatchedLocations2() {
    this.matchedLocations2 = [];
    for (var row of this.dataSource) {
      if (row.location.includes(this.searchLocation2)) {
        this.matchedLocations2.push(row.location);
      }
    }
    this.matchedLocations2 = this.matchedLocations2.filter((x, i, a) => a.indexOf(x) === i);
  }

}
