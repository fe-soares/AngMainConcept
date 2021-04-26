import { Component, OnInit } from '@angular/core';
import { Task } from '../../task';
import { TasksService } from '../../todo.service';
import { Store } from '../../todo.store';


@Component({
  selector: 'new-task',
  templateUrl: './new-task.component.html',
  styles: [
  ]
})
export class NewTaskComponent implements OnInit {

  constructor(private taskService: TasksService, private store: Store) { }

  ngOnInit(): void {
  }

  addTask(task:any){
    let length = this.store.value.todolist.length;

    let newTask : Task = { 
      id: ++length,
      nome: task.value,
      iniciado: false,
      finalizado: false
    }

    this.taskService.addToggle(newTask);
  }

}
