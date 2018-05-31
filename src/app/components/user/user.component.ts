import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private name: string;
  private email: string;

  //associative array Key:value
  private address: {
    street: string,
    province: string,
  }
  //array
  private skills: string[];
  ngOnInit() {
    this.name = "Ingon"
    this.email = "ing.ngamnoi11927@gmail.com"

    this.address = {
      street: "66/16",
      province: "Huahin"
    }

    this.skills = ["PHP", "CSS", "JAVA", "HTML", "JAVASCRIPT"];
  }
  addSkill(skill) {
    this.skills.push(skill);
    return false;  //ไม่ต้องการให้หน้าเพจรีเฟรช
  }
  removeskill(skill) {
    this.skills.forEach((element, index) => { //element  เท่ากับ skill ที่วิ้งเข้ามาหรือไม่
      if (element == skill) {
        this.skills.splice(index, 1);   //splice ลบออก
      }

    });
  }
}
