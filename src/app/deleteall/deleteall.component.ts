import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-deleteall',
  templateUrl: './deleteall.component.html',
  styleUrls: ['./deleteall.component.css'],
})
export class DeleteallComponent implements OnInit {
  constructor(private ts: TodoService) {}

  ngOnInit() {}

  removeall() {
    this.ts.deleteAll();
  }
}
