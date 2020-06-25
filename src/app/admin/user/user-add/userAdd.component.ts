import { Component, OnInit, ViewChild, AfterViewInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserData, DataBaseService } from '../../datastore/database.service';
import { FormGroup, Validators, FormControl, FormBuilder, AbstractControl } from '@angular/forms';



@Component({
  selector: 'user-add',
  templateUrl: './userAdd.component.html',
  styleUrls: ['./userAdd.component.scss']
})


export class UserAddDialog {

  constructor(public dialogRef: MatDialogRef<UserAddDialog>,
              @Inject(MAT_DIALOG_DATA) public data: UserData,
              private formBuilder: FormBuilder,
              public dataBase : DataBaseService) {}

  onNoClick(): void {
    this.dialogRef.close();
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
  userForm = new FormGroup({
    email : new FormControl('', [Validators.required, Validators.email, this.duplicatedEmail.bind(this)]),
    image : new FormControl('', [Validators.required]),
    name : new FormControl('', [Validators.required]),
    age : new FormControl('', [Validators.min(15), Validators.max(100)]),
    gender : new FormControl('', [Validators.required]),
    occupation : new FormControl('', [Validators.required]),
    department : new FormControl('', [Validators.required])
  });

  
  ngOninit() {
    
  }

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
