import { Component, Input, OnInit } from '@angular/core';
import { ContainerComponent } from '../container/container.component';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() public task: Task;
  @Input() public container: ContainerComponent;

  constructor() { }

  ngOnInit(): void {
  }

  public remove() {
    this.container.removeTask(this.task);
  }

  public agarrar() {
    console.log('e');
  }
}
