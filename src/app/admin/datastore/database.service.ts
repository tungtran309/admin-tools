import { Injectable } from '@angular/core';


export interface UserData {
  id : number;
  name : string;
  age : number;
  gender : string;
  department : string;
  occupation : string;
}

export interface AssignmentData {
  userId : number;
  startDate : string;
  completeDate : string;
  location : string;
  description : string;
  column : string;
  status : number;
}





@Injectable()
export class DataBaseService {

  public COLOR_STATUS = ["primary", "accent", "warn"] as const;
  public TEXT_STATUS = ["Đã hoàn thành", "Đang kiểm tra", "Đang sửa chữa"] as const;

  assignmentList : Array<AssignmentData> = 
    [{userId : 1, startDate : '25/05/2020', completeDate : '01/06/2020', location : "Đại học Bách Khoa", description : "Sửa dây điện", column : "N3E8", status : 0}
    ,{userId : 2, startDate : '27/05/2020', completeDate : '05/06/2020', location : "Cầu Vĩnh Tuy", description : "Thay cột mới", column : "P1Q2", status : 0}
    ,{userId : 2, startDate : '27/05/2020', completeDate : '07/06/2020', location : "Đại học Bách Khoa", description : "Sửa cột", column : "P1Q2", status : 0}
    ,{userId : 3, startDate : '25/05/2020', completeDate : '', location : "Cầu Vĩnh Tuy", description : "Sửa dây điện", column : "N3E8", status : 1}
    ,{userId : 4, startDate : '27/05/2020', completeDate : '', location : "Cầu Vĩnh Tuy", description : "Kiểm tra cột", column : "N6F7", status : 1}
    ,{userId : 5, startDate : '27/05/2020', completeDate : '', location : "Đại học Bách Khoa", description : "Kiểm tra cột", column : "P1Q2", status : 2}
    ,{userId : 1, startDate : '25/05/2020', completeDate : '', location : "Đại học Bách Khoa", description : "Tháo dây điện", column : "N6F7", status : 2}
    ,{userId : 6, startDate : '25/05/2020', completeDate : '', location : "Cầu Vĩnh Tuy", description : "Nâng cấp cột", column : "Q3T2", status : 2}
    ,{userId : 5, startDate : '27/05/2020', completeDate : '01/06/2020', location : "Đại học Bách Khoa", description : "Hàn mối nối", column : "N3E8", status : 0}
    ,{userId : 7, startDate : '22/05/2020', completeDate : '02/06/2020', location : "Đại học Xây Dựng", description : "Hàn mối nối", column : "L1M1", status : 0}
    ,{userId : 8, startDate : '22/05/2020', completeDate : '02/06/2020', location : "Đại học Xây Dựng", description : "Hàn mối nối", column : "N6F7", status : 0}
    ,{userId : 9, startDate : '25/05/2020', completeDate : '', location : "Đại học Xây Dựng", description : "Kiểm tra cột", column : "L1M1", status : 2}
    ,{userId : 1, startDate : '22/05/2020', completeDate : '01/06/2020', location : "Đại học Bách Khoa", description : "Kiểm tra cột", column : "L1M1", status : 0}
    ,{userId : 10, startDate : '25/05/2020', completeDate : '07/06/2020', location : "Đại học Bách Khoa", description : "Thay biến áp", column : "Q3T2", status : 0}
    ,{userId : 2, startDate : '22/05/2020', completeDate : '04/06/2020', location : "Đại học Xây Dựng", description : "Hàn mối nối", column : "Q3T2", status : 0}
    ,{userId : 5, startDate : '22/05/2020', completeDate : '', location : "Đại học Xây Dựng", description : "Hàn mối nối", column : "Q3T2", status : 1}]
  userList : Array<UserData> = 
    [{id : 1, name : 'Nguyễn Văn A', age : 25, gender : "Nam", department : "Hai Bà Trưng", occupation : "Quản trị viên"}
    ,{id : 2, name : 'Hoàng Thị B', age : 26, gender : "Nữ", department : "Ba Đình", occupation : "Quản trị viên"}
    ,{id : 3, name : 'Nguyễn Văn C', age : 25, gender : "Nam", department : "Hai Bà Trưng", occupation : "Thợ điện"}
    ,{id : 4, name : 'Trần Văn D', age : 34, gender : "Nam", department : "Hai Bà Trưng", occupation : "Thợ điện"}
    ,{id : 5, name : 'Nguyễn Thị E', gender : "Nữ", age : 30, department : "Ba Đình", occupation : "Thợ điện"}
    ,{id : 6, name : 'Lê Văn G', age : 37, gender : "Nam", department : "Ba Đình", occupation : "Phân tích viên"}
    ,{id : 7, name : 'Lê Thị H', age : 40, gender : "Nữ", department : "Hai Bà Trưng", occupation : "Thợ điện"}
    ,{id : 8, name : 'Bùi Văn P', age : 41, gender : "Nam", department : "Ba Đình", occupation : "Phân tích viên"}
    ,{id : 9, name : 'Võ Văn Z', age : 45, gender : "Nam", department : "Hai Bà Trưng", occupation : "Phân tích viên"}
    ,{id : 10, name : 'Trần Xuân T', age : 21,  gender : "Nam",department : "Ba Đình", occupation : "Thợ điện"}
    ,{id : 11, name : 'Chu Đình N', age : 23, gender : "Nam", department : "Hai Bà Trưng", occupation : "Phân tích viên"}
    ,{id : 12, name : 'Phạm Văn M', age : 31, gender : "Nam", department : "Ba Đình", occupation : "Thợ điện"}
    ,{id : 13, name : 'Lê Văn X', age : 27, gender : "Nam", department : "Hai Bà Trưng", occupation : "Thợ điện"}
    ,{id : 14, name : 'Nguyễn Thị Y', age : 26, gender : "Nữ", department : "Ba Đình", occupation : "Thợ điện"}
    ,{id : 15, name : 'Nguyễn Văn Z', age : 22, gender : "Nam", department : "Hai Bà Trưng", occupation : "Thợ điện"}
    ,{id : 16, name : 'Cao Thị E', gender : "Nữ", age : 28, department : "Hai Bà Trưng", occupation : "Quản trị viên"}]
  constructor() {

  }

  getAssignmentData() : Array<AssignmentData> {
    return this.assignmentList;
  }

  getUserData() : Array<UserData> {
    return this.userList;
  }

  addUser(newUser : UserData) {
    newUser.id = this.userList[this.userList.length - 1].id + 1;
    this.userList.push(newUser);
  }

}
