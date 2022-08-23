import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {
  c = 0;
  todolist = [];

  constructor() {}

  addtask(taskname) {
    console.log(taskname);
    this.todolist.push({ id: this.c++, task: taskname });
  }

  deletetask(idx) {
    this.todolist.splice(idx, 1);
  }

  deleteAll() {
    this.todolist.splice(0, this.todolist.length);
  }

  updatetask(inx, updtstrng) {
    if (inx == 0) this.todolist[inx].task = updtstrng;
    else this.todolist[--inx].task = updtstrng;
  }

}
