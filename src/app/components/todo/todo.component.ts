import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  private todo:string[];

  constructor() { }

  ngOnInit() {
  this.todo = [];

  }
  addtodo(todolist){
    this.todo.push(todolist);
    return false;
  }
}
