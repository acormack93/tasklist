import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { combineLatest } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { Pipe, PipeTransform } from '@angular/core';
import { DataServiceService, Task, TeamMember } from './shared/data-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  title = 'tasklist';
  taskList$: Observable<Task[]>

  constructor(
    private dataService: DataServiceService
  ) {}

  ngOnInit() {
    this.dataService.initialSetup()
    this.taskList$ = this.dataService.generateTaskList();
  }
}
