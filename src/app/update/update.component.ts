import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  inptnum = '';
  updtstrng = '';
  constructor(private ts: TodoService) {}

  ngOnInit() {}

  updatetodo(inx, strng) {
    this.ts.updatetask(inx, strng);
    this.inptnum = '';
    this.updtstrng = '';
  }
}
