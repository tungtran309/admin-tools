import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { DataBaseService, ImageData } from '../datastore/database.service';




@Component({
  selector: 'image-tables',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})


export class ImageComponent implements OnInit, AfterViewInit {
  constructor(public dataBase : DataBaseService) {}
  ngAfterViewInit(): void {
    
  }

  images: Array<ImageData> = [];
  ngOnInit() {
    this.images = this.dataBase.getImageData();
  }
}
