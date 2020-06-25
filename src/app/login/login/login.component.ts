import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataBaseService } from 'src/app/admin/datastore/database.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email : String;
  password : String;
  isLoggedIn = true;
  constructor(private router: Router,
              private dataBase : DataBaseService) {}

  ngOnInit() {}
  onLogin() {
    let user = this.dataBase.checkLogin(this.email, this.password);
    if (user != null) {
      localStorage.setItem('userId', user.id.toString());
      localStorage.setItem('isLoggedin', 'true');
      if (user.occupation == "Quản trị viên") {
        localStorage.setItem('isAdmin', 'true');
        this.router.navigate(['/dashboard']);
      } else {
        localStorage.setItem('isAdmin', 'false');
        this.router.navigate(['user/profile/' + user.id]);
      }
      return;
    }
    this.isLoggedIn = false;
  }
}
