import { CommonModule } from "@angular/common";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { TasksFinalizadasComponent } from "./components/tasks-finalizadas/tasks-finalizadas.component";
import { TasksIniciadasComponent } from "./components/tasks-iniciadas/tasks-iniciadas.component";
import { TasksComponent } from "./components/tasks/tasks.component";
import { ToDoListComponent } from "./components/todo-list/todo-list.component";
import { TodoComponent } from "./todo.component";
import { TasksService } from "./todo.service";
import { Store } from "./todo.store";
import { NewTaskComponent } from './components/new-task/new-task.component';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ],
    providers:[
        TasksService,
        Store
    ],
    declarations:[
        TodoComponent,
        TasksFinalizadasComponent,
        TasksIniciadasComponent,
        ToDoListComponent,
        TasksComponent,
        NewTaskComponent
    ],
    exports: [
        TodoComponent,
        TasksFinalizadasComponent,
        TasksIniciadasComponent,
        ToDoListComponent,
        TasksComponent
    ]
})
export class TodoModule{}