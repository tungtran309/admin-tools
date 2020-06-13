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
    this.images = [
      {
        imgSrc: 'assets/images/incident1.jpeg',
        name: 'Cột điện hỏng',
        description: `Sét đánh vào đường điện cao thế`,
        date: '12/05/2020',
        location: 'Hai Bà Trưng, Hà Nội'
      },
      {
        imgSrc: 'assets/images/incident2.jpg',
        name: 'Đổ cột điện',
        description: `Cột điện ở đường quốc lộ bị đổ`,
        date: '13/05/2020',
        location: 'Sơn Tây, Hà Nội'
      },
      {
        imgSrc: 'assets/images/incident3.jpg',
        name: 'Đứt dây điện',
        description: `Dây điện trong khu dân cư bị đứt`,
        date: '13/05/2020',
        location: 'Ba Đình, Hà Nội'
      },
      {
        imgSrc: 'assets/images/incident1.jpeg',
        name: 'Cột điện hỏng',
        description: `Sét đánh vào đường điện cao thế`,
        date: '12/05/2020',
        location: 'Hai Bà Trưng, Hà Nội'
      },
      {
        imgSrc: 'assets/images/incident2.jpg',
        name: 'Đổ cột điện',
        description: `Cột điện ở đường quốc lộ bị đổ`,
        date: '13/05/2020',
        location: 'Sơn Tây, Hà Nội'
      },
      {
        imgSrc: 'assets/images/incident3.jpg',
        name: 'Đứt dây điện',
        description: `Dây điện trong khu dân cư bị đứt`,
        date: '13/05/2020',
        location: 'Ba Đình, Hà Nội'
      },
      {
        imgSrc: 'assets/images/incident1.jpeg',
        name: 'Cột điện hỏng',
        description: `Sét đánh vào đường điện cao thế`,
        date: '12/05/2020',
        location: 'Hai Bà Trưng, Hà Nội'
      },
      {
        imgSrc: 'assets/images/incident2.jpg',
        name: 'Đổ cột điện',
        description: `Cột điện ở đường quốc lộ bị đổ`,
        date: '13/05/2020',
        location: 'Sơn Tây, Hà Nội'
      },
      {
        imgSrc: 'assets/images/incident3.jpg',
        name: 'Đứt dây điện',
        description: `Dây điện trong khu dân cư bị đứt`,
        date: '13/05/2020',
        location: 'Ba Đình, Hà Nội'
      }
    ];
  }
}
