import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { ListService } from 'src/app/services/list.service';
import { Todos } from 'src/models/todo.model';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss'],
})
export class CreateTodoComponent implements OnInit {
  text: string = 'voltar';
  description: string = '';
  show: boolean = false;
  @Output() newItemEvent = new EventEmitter<any>();

  variavel: number = 3;

  constructor(private service: ListService) {}
  
  ngOnInit(): void {
  }
  

  addNewTodo() {
    const todoEmitir: Todos = {
      description: this.description,
    };
    this.service.addTodo(todoEmitir).subscribe((resultado) => {
      console.log(resultado);
      this.description = '';
    });
  }
}
