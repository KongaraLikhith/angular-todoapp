import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-inputform',
  templateUrl: './inputform.component.html',
  styleUrls: ['./inputform.component.css'],
})
export class InputformComponent implements OnInit {
  inputstrng = '';
  constructor(private ts: TodoService) {}

  ngOnInit() {}

  addtodo(tskname) {
    this.ts.addtask(tskname);
    this.inputstrng = '';
  }

  clrfld() {
    this.inputstrng = '';
  }
}
