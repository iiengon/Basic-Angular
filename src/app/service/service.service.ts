import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(public http:Http) { // service ที่ถูก inject เข้ามาใน component

  }

  getTodoList(){
    return this.http.get('https://jsonplaceholder.typicode.com/todos').pipe(map(res => res.json())); // mapข้อมูลเป็น json
  }
}
