import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todos } from 'src/models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  private listItems: any[];
  private url = 'http://localhost:3000/todos';

  constructor(private HttpClient: HttpClient) {
    this.listItems = [];
  }
  get items() {
    return this.listItems;
  }

  allTheTodos(): Observable<Todos[]> {
    return this.HttpClient.get<Todos[]>(this.url);
  }

  addTodo(item: Todos): Observable<Todos> {
    return this.HttpClient.post<Todos>(this.url, item);
  }

  remove(items: any[], item: any) {
    return items.filter((a) => item.description !== a.description);
  }
}
