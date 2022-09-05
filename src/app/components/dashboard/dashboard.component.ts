import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  text: string = 'Criar novo';
  show: boolean = false;

  constructor(private service: ListService) {}

  ngOnInit(): void {}

  
}
