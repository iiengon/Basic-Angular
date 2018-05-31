import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../../service/service.service';

@Component({
  selector: 'app-callapi',
  templateUrl: './callapi.component.html',
  styleUrls: ['./callapi.component.css']
})
export class CallapiComponent implements OnInit {

  private todoList:Todo[];   //todoList=interface
  constructor(private serviceService:ServiceService) { 
  }

  ngOnInit() {
    //call Service
    this.serviceService.getTodoList().subscribe((res)=>{    //Observable“ตัวส่งข้อมูล” Observer ตัวรับ sub ตัวเชื่อมการทำงาน
     
      this.todoList = res;

    })
  }
  

}
//บอกชนิดของข้อมูล
interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}