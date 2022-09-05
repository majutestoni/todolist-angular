import { Component, Input, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';
import { Todos } from 'src/models/todo.model';

@Component({
  selector: 'app-dashboard-list',
  templateUrl: './dashboard-list.component.html',
  styleUrls: ['./dashboard-list.component.scss'],
})
export class DashboardListComponent implements OnInit {
  items: any = [];

  constructor(private ListService: ListService) {}

  ngOnInit(): void {
    this.items = this.ListService.items;
    this.ListService.allTheTodos().subscribe((items: Todos[]) => {
      console.table(items);
      this.items = items;
    });
  }
}
