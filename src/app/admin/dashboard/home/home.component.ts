import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Place {
  imgSrc: string;
  name: string;
  description: string;
  date: string;
  location: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  places: Array<Place> = [];
  constructor(private router : Router) {}
  ngOnInit() {
    this.places = [
      {
        imgSrc: 'assets/images/image1.jpeg',
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

  navigate(link : String) {
    this.router.navigate([link]);
  }
}
