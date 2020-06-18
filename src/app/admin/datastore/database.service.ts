import { Injectable } from '@angular/core';


export interface UserData {
  id : number;
  email : string;
  name : string;
  age : number;
  gender : string;
  department : string;
  occupation : string;
}

export interface ImageData {
  imgSrc: string;
  date: string;
  columnId : string;
  droneId : number;
  location: string;
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

export interface DroneData {
  id : number;
  model : string;
  height : number;
  weight : number;
  battery : number;
  flight_time : number;
  speed : number;
  image : string;
}





@Injectable()
export class DataBaseService {

  public COLOR_STATUS = ["primary", "accent", "warn"] as const;
  public TEXT_STATUS = ["Đã hoàn thành", "Đang kiểm tra", "Đang sửa chữa"] as const;

  assignmentList : Array<AssignmentData> = 
    [{userId : 1, startDate : '21/05/2020', completeDate : '01/06/2020', location : "Đại học Bách Khoa", description : "Sửa dây điện", column : "N3E8", status : 0}
    ,{userId : 2, startDate : '23/05/2020', completeDate : '05/06/2020', location : "Cầu Vĩnh Tuy", description : "Thay cột mới", column : "P1Q2", status : 0}
    ,{userId : 2, startDate : '24/05/2020', completeDate : '07/06/2020', location : "Đại học Bách Khoa", description : "Sửa cột", column : "P1Q2", status : 0}
    ,{userId : 3, startDate : '25/05/2020', completeDate : '', location : "Cầu Vĩnh Tuy", description : "Sửa dây điện", column : "N3E8", status : 1}
    ,{userId : 4, startDate : '29/05/2020', completeDate : '', location : "Cầu Vĩnh Tuy", description : "Kiểm tra cột", column : "N6F7", status : 1}
    ,{userId : 5, startDate : '30/05/2020', completeDate : '', location : "Đại học Bách Khoa", description : "Kiểm tra cột", column : "P1Q2", status : 2}
    ,{userId : 1, startDate : '03/05/2020', completeDate : '', location : "Đại học Bách Khoa", description : "Tháo dây điện", column : "N6F7", status : 2}
    ,{userId : 6, startDate : '05/05/2020', completeDate : '', location : "Cầu Vĩnh Tuy", description : "Nâng cấp cột", column : "Q3T2", status : 2}
    ,{userId : 5, startDate : '27/05/2020', completeDate : '01/06/2020', location : "Đại học Bách Khoa", description : "Hàn mối nối", column : "N3E8", status : 0}
    ,{userId : 7, startDate : '11/05/2020', completeDate : '02/06/2020', location : "Đại học Xây Dựng", description : "Hàn mối nối", column : "L1M1", status : 0}
    ,{userId : 8, startDate : '22/05/2020', completeDate : '02/06/2020', location : "Đại học Xây Dựng", description : "Hàn mối nối", column : "N6F7", status : 0}
    ,{userId : 9, startDate : '17/05/2020', completeDate : '', location : "Đại học Xây Dựng", description : "Kiểm tra cột", column : "L1M1", status : 2}
    ,{userId : 1, startDate : '22/05/2020', completeDate : '01/06/2020', location : "Đại học Bách Khoa", description : "Kiểm tra cột", column : "L1M1", status : 0}
    ,{userId : 10, startDate : '19/05/2020', completeDate : '07/06/2020', location : "Đại học Bách Khoa", description : "Thay biến áp", column : "Q3T2", status : 0}
    ,{userId : 2, startDate : '01/06/2020', completeDate : '04/06/2020', location : "Đại học Xây Dựng", description : "Hàn mối nối", column : "Q3T2", status : 0}
    ,{userId : 5, startDate : '22/05/2020', completeDate : '', location : "Đại học Xây Dựng", description : "Hàn mối nối", column : "Q3T2", status : 1}]
  userList : Array<UserData> = 
    [{id : 1, email : 'nguyenvana@gmail.com', name : 'Nguyễn Văn A', age : 25, gender : "Nam", department : "Hai Bà Trưng", occupation : "Quản trị viên"}
    ,{id : 2, email : 'hoangthib@gmail.com', name : 'Hoàng Thị B', age : 26, gender : "Nữ", department : "Ba Đình", occupation : "Quản trị viên"}
    ,{id : 3, email : 'nguyenvanc@gmail.com', name : 'Nguyễn Văn C', age : 25, gender : "Nam", department : "Hai Bà Trưng", occupation : "Thợ điện"}
    ,{id : 4, email : 'tranvand@gmail.com', name : 'Trần Văn D', age : 34, gender : "Nam", department : "Hai Bà Trưng", occupation : "Thợ điện"}
    ,{id : 5, email : 'nguyenthie@gmail.com', name : 'Nguyễn Thị E', gender : "Nữ", age : 30, department : "Ba Đình", occupation : "Thợ điện"}
    ,{id : 6, email : 'levang@gmail.com', name : 'Lê Văn G', age : 37, gender : "Nam", department : "Ba Đình", occupation : "Phân tích viên"}
    ,{id : 7, email : 'lethih@gmail.com', name : 'Lê Thị H', age : 40, gender : "Nữ", department : "Hai Bà Trưng", occupation : "Thợ điện"}
    ,{id : 8, email : 'buivanp@gmail.com', name : 'Bùi Văn P', age : 41, gender : "Nam", department : "Ba Đình", occupation : "Phân tích viên"}
    ,{id : 9, email : 'vovanz@gmail.com', name : 'Võ Văn Z', age : 45, gender : "Nam", department : "Hai Bà Trưng", occupation : "Phân tích viên"}
    ,{id : 10, email : 'tranxuant@gmail.com', name : 'Trần Xuân T', age : 21,  gender : "Nam",department : "Ba Đình", occupation : "Thợ điện"}
    ,{id : 11, email : 'chudinhn@gmail.com', name : 'Chu Đình N', age : 23, gender : "Nam", department : "Hai Bà Trưng", occupation : "Phân tích viên"}
    ,{id : 12, email : 'phamvanm@gmail.com', name : 'Phạm Văn M', age : 31, gender : "Nam", department : "Ba Đình", occupation : "Thợ điện"}
    ,{id : 13, email : 'levanx@gmail.com', name : 'Lê Văn X', age : 27, gender : "Nam", department : "Hai Bà Trưng", occupation : "Thợ điện"}
    ,{id : 14, email : 'nguyenthiy@gmail.com', name : 'Nguyễn Thị Y', age : 26, gender : "Nữ", department : "Ba Đình", occupation : "Thợ điện"}
    ,{id : 15, email : 'nguyenvanz@gmail.com', name : 'Nguyễn Văn Z', age : 22, gender : "Nam", department : "Hai Bà Trưng", occupation : "Thợ điện"}
    ,{id : 16, email : 'caothie@gmail.com', name : 'Cao Thị E', gender : "Nữ", age : 28, department : "Hai Bà Trưng", occupation : "Quản trị viên"}]
  droneList : Array<DroneData> = 
    [{id : 1, model : 'Intel Aero 4', height : 150, weight : 1000, battery : 15000, flight_time : 2000, speed : 10, image : 'assets/images/drone1.jpg'},
    {id : 2, model : 'DJI Phantom 4', height : 200, weight : 900, battery : 10000, flight_time : 50, speed : 11, image : 'assets/images/drone2.jpeg'},
    {id : 3, model : 'Mini Drone Visual XS809HW', height : 170, weight : 1100, battery : 8000, flight_time : 90, speed : 10, image : 'assets/images/drone3.jpg'},
    {id : 4, model : 'GoPro Karma 3D', height : 210, weight : 1050, battery : 9000, flight_time : 200, speed : 15, image : 'assets/images/drone4.jpeg'},
    {id : 5, model : 'Futuristic Drone 1', height : 200, weight : 1200, battery : 7000, flight_time : 180, speed : 13, image : 'assets/images/drone5.jpeg'},
    {id : 6, model : 'DJI Mavic Pro 2', height : 165, weight : 800, battery : 10000, flight_time : 0, speed : 14, image : 'assets/images/drone6.jpeg'},
    {id : 7, model : 'CGAxis 3D', height : 178, weight : 1500, battery : 12000, flight_time : 500, speed : 10, image : 'assets/images/drone7.jpeg'},
    {id : 8, model : 'Quadcopter V1', height : 190 , weight : 1300, battery : 9500, flight_time : 400, speed : 11, image : 'assets/images/drone8.jpeg'}];
  imageList : Array<ImageData> = 
    [{imgSrc: 'assets/images/image1.jpeg',  date: '12/05/2020', columnId : "N3E8", droneId : 1, location: 'Đại học Bách Khoa'},
    {imgSrc: 'assets/images/image2.jpeg',  date: '13/05/2020', columnId : "P1Q2", droneId : 3, location: 'Cầu Vĩnh Tuy'},
    {imgSrc: 'assets/images/image3.jpeg',  date: '19/05/2020', columnId : "N6F7", droneId : 1, location: 'Cầu Vĩnh Tuy'},
    {imgSrc: 'assets/images/image4.jpeg',  date: '23/05/2020', columnId : "Q3T2", droneId : 2, location: 'Đại học Bách Khoa'},
    {imgSrc: 'assets/images/image5.jpeg',  date: '12/05/2020', columnId : "L1M1", droneId : 1, location: 'Đường Vành đai 3'},
    {imgSrc: 'assets/images/image6.jpeg',  date: '14/05/2020', columnId : "E1D2", droneId : 2, location: 'Đại học Xây Dựng'},
    {imgSrc: 'assets/images/image7.jpeg',  date: '17/05/2020', columnId : "E3D5", droneId : 3, location: 'Đại học Bách Khoa'},
    {imgSrc: 'assets/images/image8.jpeg',  date: '16/05/2020', columnId : "L2P1", droneId : 1, location: 'Đại học Xây Dựng'},
    {imgSrc: 'assets/images/image9.jpeg',  date: '07/05/2020', columnId : "L3T5", droneId : 3, location: 'Đường Vành đai 3'},
    {imgSrc: 'assets/images/image10.jpeg',  date: '22/05/2020', columnId : "T2F4", droneId : 1, location: 'Đại học Xây Dựng'},
    {imgSrc: 'assets/images/image11.jpeg',  date: '01/06/2020', columnId : "P1D3", droneId : 2, location: 'Đường Vành đai 3'}];
  constructor() {

  }

  getImageData() : Array<ImageData> {
    return this.imageList;
  }

  getAssignmentData() : Array<AssignmentData> {
    return this.assignmentList;
  }

  getUserData() : Array<UserData> {
    return this.userList;
  }

  getDroneData() : Array<DroneData> {
    return this.droneList;
  }

  getUserName(id : number) : String {
    for (var user of this.userList) {
      if (user.id == id) {
        return user.name;
      }
    }
    return "";
  }

  getDroneName(id : number) : String {
    for (var drone of this.droneList) {
      if (drone.id == id) {
        return drone.model;
      }
    }
    return "";
  }

  addUser(newUser : UserData) {
    newUser.id = this.userList[this.userList.length - 1].id + 1;
    this.userList.push(newUser);
  }

  addDrone(newDrone : DroneData) {
    newDrone.id = this.droneList[this.droneList.length - 1].id + 1;
    this.droneList.push(newDrone);
  }

}
