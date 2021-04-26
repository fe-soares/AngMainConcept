import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TasksService } from '../../todo.service';
import { Store } from '../../todo.store';

@Component({
  selector: 'tasks-finalizadas',
  templateUrl: './tasks-finalizadas.component.html',
  styles: [
  ]
})
export class TasksFinalizadasComponent implements OnInit {

  finalizados$: Observable<any[]> = {} as Observable<any[]>;

  constructor(private taskService: TasksService, private store: Store) { }

  ngOnInit(): void {
    this.finalizados$ = this.store.getTodoList()
    .pipe(
      map(todolist => todolist.filter(task => task.finalizado))
    );
  }

  onToggle(event: any){
    this.taskService.toggle(event);
  }
}
