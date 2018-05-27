import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import {ServiceService} from '../../service/service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private name:string;
  private email:string;

  //associative array Key:value
  private address:{
    street:string,
    province:string,
  }
  private skills:string[];
  private todoList:Todo[];

  constructor(private serviceService:ServiceService) { 

  }

  ngOnInit() {
    this.name = "Ingon"
    this.email = "ing.ngamnoi11927@gmail.com"

    this.address = {
      street:"66/16",
      province:"Huahin"
    }

    this.skills = ["PHP","CSS","JAVA","HTML","JAVASCRIPT"];

    //call Service
    this.serviceService.getTodoList().subscribe((res)=>{
      this.todoList = res;

    })
  }
  addSkill(skill){
    this.skills.push(skill);
    return false;
  }
  removeskill(skill){
    this.skills.forEach((element,index)=> {
      if(element == skill){
        this.skills.splice(index,1);
      }

    });
  }
 


}
interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
