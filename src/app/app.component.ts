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
  show = 'tasks';
  taskList$: Observable<Task[]>;
  team: TeamMember[];

  constructor(
    private dataService: DataServiceService
  ) {}

  ngOnInit() {
    this.dataService.initialSetup();
    this.taskList$ = this.dataService.generateTaskList();
    this.team = this.dataService.teamMembers;
  }

  deleteTask(task) {
    this.dataService.deleteTask(task);
    this.taskList$ = this.dataService.generateTaskList();
    this.team = this.dataService.teamMembers;
  }

  addTask(task) {
    this.dataService.addTask({
      id: task.name + this.dataService.taskList.length, // TODO add hash + check unique
      name: task.name,
      desc: task.desc,
      teamMembers: [],
      active: true,
    });
    this.taskList$ = this.dataService.generateTaskList();
    this.show = 'tasks';
    this.team = this.dataService.teamMembers;
  }

  addMember(task: Task, member) {
    this.dataService.addMember(task, member);
    this.taskList$ = this.dataService.generateTaskList();
    if (this.dataService.checkMemberCapacity(member)) {
      window.alert(this.getMemberById(member).name + ' has ' + this.dataService.checkMemberCapacity(member) + ' tasks already!');
    }
    this.team = this.dataService.teamMembers;
  }

  removeMember(task: Task, member) {
    this.dataService.removeMember(task, member);
    this.taskList$ = this.dataService.generateTaskList();
    this.team = this.dataService.teamMembers;
  }

  getMemberById(id: number) {
    return this.dataService.getMemberById(id);
  }
  markTaskComplete(task: Task) {
    this.dataService.markTaskComplete(task);
    this.taskList$ = this.dataService.generateTaskList();
    this.team = this.dataService.teamMembers;
  }

  getAvailableTeam(task: Task) {
    return this.dataService.getAvailableTeam(task);
  }
}
