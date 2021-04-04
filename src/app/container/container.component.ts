import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  private static currentGrabOrigin: ContainerComponent;

  @Input() public title: string = '';
  @Input() public imgSrc: string = '';
  @Input() public taskClasses: string = '';
  @Input() public canAddTasks: boolean = false;
  public tasks: Task[] = [];

  constructor() { }

  ngOnInit(): void {
    let myTask = new Task('Quitar caca Sansón', '1', 'Lo ha vuelto a hacer otra vez');
    this.tasks.push(myTask);
    this.tasks.push(new Task('Comprar', '2', 'Como minimo 10 curasan'));
  }

  // newTask pregunta al usuario por los campos de la tarea.
  public newTask(): void {
    let title = prompt('Título de la nueva tarea');
    let description = prompt('Descripción de la tarea');
    let priority = prompt('Establecer prioridad (1, 2 o 3)');

    if (priority != '1' && priority != '2' && priority != '3') {
      alert('Prioridad incorrecta');
      return;
    }

    if (title != null && description != null && priority != null) {
      this.addTask(title, description, priority);
    }
  }

  // creamos la tarea y la añadimos a la lista
  private addTask(title: string, description: string, priority: '1' | '2' | '3') {
    let task = new Task(title, priority, description);
    this.tasks.push(task);
  }

  public removeTask(task: Task) {
    let index = this.tasks.indexOf(task);
    this.removeItem(index);
  }

  public removeItem(index: number) {
    this.tasks.splice(index, 1);
  }

  public agarrar(event: DragEvent, task: Task) {
    console.log(task);
    event.dataTransfer?.setData('task', JSON.stringify(task));
    ContainerComponent.currentGrabOrigin = this;
  }

  public soltar(event: DragEvent) {
    console.log('drop');
    let data = event.dataTransfer?.getData('task');
    if (data != undefined) {
      let task: Task = JSON.parse(data);
      ContainerComponent.currentGrabOrigin.removeTask(task);
      this.tasks.push(task);
    }
  }

  public permitirDrop(event: DragEvent) {
    console.log('permitir');
    event.preventDefault();
  }
}
