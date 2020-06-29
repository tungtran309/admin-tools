import { Injectable } from '@angular/core';


export interface UserData {
  id : number;
  email : string;
  name : string;
  age : number;
  gender : string;
  department : string;
  occupation : string;
  image : string;
}


export interface FlightData {
  id : number;
  date : string;
  droneId : number;
  flightName : string;
}

export interface ImageData {
  imgSrc: string;
  columnId : string;
  flightId : number;
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





@Injectable({
  providedIn: 'root',
})
export class DataBaseService {

  public COLOR_STATUS = ["primary", "accent", "warn"] as const;
  public TEXT_STATUS = ["Đã hoàn thành", "Đang kiểm tra", "Đang thực hiện"] as const;
  public DRONE_STATUS = ["Sẵn sàng", "Đang sử dụng", "Đang bị hỏng"] as const;

  public static assignmentList : Array<AssignmentData> = 
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
    public static userList : Array<UserData> = 
    [{id : 1, image : 'assets/images/user_male_1.jpeg', email : 'nguyenvana@gmail.com', name : 'Nguyễn Văn A', age : 25, gender : "Nam", department : "Hai Bà Trưng", occupation : "Quản trị viên"}
    ,{id : 2, image : 'assets/images/user_female_1.jpeg',  email : 'hoangthib@gmail.com', name : 'Hoàng Thị B', age : 26, gender : "Nữ", department : "Ba Đình", occupation : "Quản trị viên"}
    ,{id : 3, image : 'assets/images/user_male_2.jpeg', email : 'nguyenvanc@gmail.com', name : 'Nguyễn Văn C', age : 25, gender : "Nam", department : "Hai Bà Trưng", occupation : "Thợ điện"}
    ,{id : 4, image : 'assets/images/user_male_3.jpeg', email : 'tranvand@gmail.com', name : 'Trần Văn D', age : 34, gender : "Nam", department : "Hai Bà Trưng", occupation : "Thợ điện"}
    ,{id : 5, image : 'assets/images/user_female_2.jpeg', email : 'nguyenthie@gmail.com', name : 'Nguyễn Thị E', gender : "Nữ", age : 30, department : "Ba Đình", occupation : "Thợ điện"}
    ,{id : 6, image : 'assets/images/user_male_4.jpeg', email : 'levang@gmail.com', name : 'Lê Văn G', age : 37, gender : "Nam", department : "Ba Đình", occupation : "Phân tích viên"}
    ,{id : 7, image : 'assets/images/user_female_3.jpeg', email : 'lethih@gmail.com', name : 'Lê Thị H', age : 40, gender : "Nữ", department : "Hai Bà Trưng", occupation : "Thợ điện"}
    ,{id : 8, image : 'assets/images/user_male_5.jpeg', email : 'buivanp@gmail.com', name : 'Bùi Văn P', age : 41, gender : "Nam", department : "Ba Đình", occupation : "Phân tích viên"}
    ,{id : 9, image : 'assets/images/user_male_2.jpeg', email : 'vovanz@gmail.com', name : 'Võ Văn Z', age : 45, gender : "Nam", department : "Hai Bà Trưng", occupation : "Phân tích viên"}
    ,{id : 10, image : 'assets/images/user_male_1.jpeg', email : 'tranxuant@gmail.com', name : 'Trần Xuân T', age : 21,  gender : "Nam",department : "Ba Đình", occupation : "Thợ điện"}
    ,{id : 11, image : 'assets/images/user_male_3.jpeg', email : 'chudinhn@gmail.com', name : 'Chu Đình N', age : 23, gender : "Nam", department : "Hai Bà Trưng", occupation : "Phân tích viên"}
    ,{id : 12, image : 'assets/images/user_male_4.jpeg', email : 'phamvanm@gmail.com', name : 'Phạm Văn M', age : 31, gender : "Nam", department : "Ba Đình", occupation : "Thợ điện"}
    ,{id : 13, image : 'assets/images/user_male_5.jpeg', email : 'levanx@gmail.com', name : 'Lê Văn X', age : 27, gender : "Nam", department : "Hai Bà Trưng", occupation : "Thợ điện"}
    ,{id : 14, image : 'assets/images/user_female_4.jpeg', email : 'nguyenthiy@gmail.com', name : 'Nguyễn Thị Y', age : 26, gender : "Nữ", department : "Ba Đình", occupation : "Thợ điện"}
    ,{id : 15, image : 'assets/images/user_male_2.jpeg', email : 'nguyenvanz@gmail.com', name : 'Nguyễn Văn Z', age : 22, gender : "Nam", department : "Hai Bà Trưng", occupation : "Thợ điện"}
    ,{id : 16, image : 'assets/images/user_female_5.jpeg', email : 'caothie@gmail.com', name : 'Cao Thị E', gender : "Nữ", age : 28, department : "Hai Bà Trưng", occupation : "Quản trị viên"}]
    public static droneList : Array<DroneData> = 
    [{id : 1, model : 'Intel Aero 4', height : 150, weight : 1000, battery : 15000, flight_time : 2000, speed : 10, image : 'assets/images/drone1.jpg'},
    {id : 2, model : 'DJI Phantom 4', height : 200, weight : 900, battery : 10000, flight_time : 50, speed : 11, image : 'assets/images/drone2.jpeg'},
    {id : 3, model : 'Mini Drone Visual XS809HW', height : 170, weight : 1100, battery : 8000, flight_time : 90, speed : 10, image : 'assets/images/drone3.jpg'},
    {id : 4, model : 'GoPro Karma 3D', height : 210, weight : 1050, battery : 9000, flight_time : 200, speed : 15, image : 'assets/images/drone4.jpeg'},
    {id : 5, model : 'Futuristic Drone 1', height : 200, weight : 1200, battery : 7000, flight_time : 180, speed : 13, image : 'assets/images/drone5.jpeg'},
    {id : 6, model : 'DJI Mavic Pro 2', height : 165, weight : 800, battery : 10000, flight_time : 0, speed : 14, image : 'assets/images/drone6.jpeg'},
    {id : 7, model : 'CGAxis 3D', height : 178, weight : 1500, battery : 12000, flight_time : 500, speed : 10, image : 'assets/images/drone7.jpeg'},
    {id : 8, model : 'Quadcopter V1', height : 190 , weight : 1300, battery : 9500, flight_time : 400, speed : 11, image : 'assets/images/drone8.jpeg'}];
    public static flightList : Array<FlightData> = 
    [{id : 1, droneId : 1, date : '25/06/2020', flightName : 'Chuyến bay 1'},
    {id : 2, droneId : 2, date : '19/06/2020', flightName : 'Chuyến bay 2'},
    {id : 3, droneId : 3, date : '22/06/2020', flightName : 'Chuyến bay 3'},
    {id : 4, droneId : 4, date : '23/06/2020', flightName : 'Chuyến bay 4'},
    {id : 5, droneId : 5, date : '21/06/2020', flightName : 'Chuyến bay 5'}];
    public static imageList : Array<ImageData> = 
    [{imgSrc: 'assets/images/image1.jpeg', columnId : "N3E8", flightId : 1, location: 'Đại học Bách Khoa'},
    {imgSrc: 'assets/images/image2.jpeg', columnId : "P1Q2", flightId : 1, location: 'Cầu Vĩnh Tuy'},
    {imgSrc: 'assets/images/image3.jpeg', columnId : "N6F7", flightId : 1, location: 'Cầu Vĩnh Tuy'},
    {imgSrc: 'assets/images/image4.jpeg', columnId : "Q3T2", flightId : 1, location: 'Đại học Bách Khoa'},
    {imgSrc: 'assets/images/image5.jpeg', columnId : "L1M1", flightId : 2, location: 'Đường Vành đai 3'},
    {imgSrc: 'assets/images/image6.jpeg', columnId : "E1D2", flightId : 2, location: 'Đại học Xây Dựng'},
    {imgSrc: 'assets/images/image7.jpeg',  columnId : "E3D5", flightId : 2, location: 'Đại học Bách Khoa'},
    {imgSrc: 'assets/images/image8.jpeg',  columnId : "L2P1", flightId : 2, location: 'Đại học Xây Dựng'},
    {imgSrc: 'assets/images/image9.jpeg',  columnId : "L3T5", flightId : 3, location: 'Đường Vành đai 3'},
    {imgSrc: 'assets/images/image10.jpeg',  columnId : "T2F4", flightId : 3, location: 'Đại học Xây Dựng'},
    {imgSrc: 'assets/images/image11.jpeg',  columnId : "P1D3", flightId : 3, location: 'Đường Vành đai 3'},
    {imgSrc: 'assets/images/image1.jpeg', columnId : "N3E8", flightId : 4, location: 'Đại học Bách Khoa'},
    {imgSrc: 'assets/images/image2.jpeg', columnId : "P1Q2", flightId : 4, location: 'Cầu Vĩnh Tuy'},
    {imgSrc: 'assets/images/image3.jpeg', columnId : "N6F7", flightId : 4, location: 'Cầu Vĩnh Tuy'},
    {imgSrc: 'assets/images/image4.jpeg', columnId : "Q3T2", flightId : 4, location: 'Đại học Bách Khoa'},
    {imgSrc: 'assets/images/image5.jpeg', columnId : "L1M1", flightId : 5, location: 'Đường Vành đai 3'},
    {imgSrc: 'assets/images/image6.jpeg', columnId : "E1D2", flightId : 5, location: 'Đại học Xây Dựng'},
    {imgSrc: 'assets/images/image7.jpeg',  columnId : "E3D5", flightId : 5, location: 'Đại học Bách Khoa'},
    {imgSrc: 'assets/images/image8.jpeg',  columnId : "L2P1", flightId : 5, location: 'Đại học Xây Dựng'}];
  constructor() {

  }

  getImageData() : Array<ImageData> {
    return DataBaseService.imageList;
  }
  getImageDataFromDroneId(droneId : number) : Array<ImageData> {
    let res : Array<ImageData> = [];
    for (var image of DataBaseService.imageList) {
        let imageDroneId = this.getDroneIdByFlightId(image.flightId);
        if (imageDroneId == droneId) {
          res.push(image);
        }
    }
    return res;
  }

  getAssignmentData() : Array<AssignmentData> {
    return DataBaseService.assignmentList;
  }

  getAssignmentDataByUserId(id : number) : Array<AssignmentData> {
    let res : Array<AssignmentData> = [];
    for (var assignment of DataBaseService.assignmentList) {
      if (assignment.userId == id) {
        res.push(assignment);
      }
    }
    return res;
  }

  getUserData() : Array<UserData> {
    return DataBaseService.userList;
  }

  getDroneData() : Array<DroneData> {
    return DataBaseService.droneList;
  }

  getUserName(id : number) : String {
    for (var user of DataBaseService.userList) {
      if (user.id == id) {
        return user.name;
      }
    }
    return "";
  }

  getDroneName(id : number) : String {
    for (var drone of DataBaseService.droneList) {
      if (drone.id == id) {
        return drone.model;
      }
    }
    return "";
  }

  getDroneDataById(id : number) : DroneData {
    for (var drone of DataBaseService.droneList) {
      if (drone.id == id) {
        return drone;
      }
    }
    return null;
  }

  updateDroneById(data : DroneData) {
    for (var drone of DataBaseService.droneList) {
      if (drone.id == data.id) {
        drone = data;
        return;
      }
    }
  }

  addUser(newUser : UserData) {
    newUser.id = DataBaseService.userList[DataBaseService.userList.length - 1].id + 1;
    DataBaseService.userList.push(newUser);
  }

  getUserDataById(id : number) : UserData {
    for (var user of DataBaseService.userList) {
      if (user.id == id) {
        return user;
      }
    }
    return null;
  }

  updateUserById(data : UserData) {
    for (var user of DataBaseService.userList) {
      if (user.id == data.id) {
        user = data;
        return;
      }
    }
  }

  deleteUser(user : UserData) {
    const index = DataBaseService.userList.indexOf(user, 0);
    if (index > -1) {
        DataBaseService.userList.splice(index, 1);
        console.log(DataBaseService.userList);
    } else {
      console.log('cant find user' + user);
    }
  }

  addDrone(newDrone : DroneData) {
    newDrone.id = DataBaseService.droneList[DataBaseService.droneList.length - 1].id + 1;
    DataBaseService.droneList.push(newDrone);
  }

  deleteDrone(drone : DroneData) {
    const index = DataBaseService.droneList.indexOf(drone, 0);
    if (index > -1) {
        DataBaseService.droneList.splice(index, 1);
    } else {
      console.log('cant find user' + drone);
    }
  }

  getDateByFlightId(id : number) {
    for (var flight of DataBaseService.flightList) {
      if (flight.id == id) {
        return flight.date;
      }
    }
  }

  getDroneIdByFlightId(id : number) {
    for (var flight of DataBaseService.flightList) {
      if (flight.id == id) {
        return flight.droneId;
      }
    }
    return null;
  }

  getDroneNameByFlightId(id : number) {
    for (var flight of DataBaseService.flightList) {
      if (flight.id == id) {
        for (var drone of DataBaseService.droneList) {
          if (drone.id == flight.droneId) {
            return drone.model;
          }
        }
        return null;
      }
    }
    return null;
  }

  getFlightNameByFlightId(id : number) {
    for (var flight of DataBaseService.flightList) {
      if (flight.id == id) {
        return flight.flightName;
      }
    }
  }

  checkLogin(email : String, password : String) : UserData {
    console.log(DataBaseService.userList);
    for (var user of DataBaseService.userList) {
      if (user.email == email) {
        return user;
      }
    }
    return null;
  }
}
