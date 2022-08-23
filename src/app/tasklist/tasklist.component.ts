import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css'],
})
export class TasklistComponent implements OnInit {
  todos;
  constructor(private ts: TodoService) {}

  ngOnInit() {
    this.todos = this.ts.todolist;
  }

  isValid() {
    return this.todos.length != 0;
  }
  deletetodo(indx) {
    this.ts.deletetask(indx);
  }
   
  edit(){
    
  }
}
