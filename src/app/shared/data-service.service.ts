import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable, from } from 'rxjs';

export interface TeamMember {
  id: number;
  name: string;
  activeTasks: number;
  inactiveTasks: number;
}

export interface Task {
  id: number;
  name: string;
  desc: string;
  teamMembers: number[]; // id of team memeber
  active: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class DataServiceService {

  teamMemberOverCapactyAlert: BehaviorSubject<string>;

  teamMembers: TeamMember[] = [
    {id: 1, name: 'Dr Annie Hou', activeTasks: 0, inactiveTasks: 0 },
    {id: 2, name: 'Céline Aussourd', activeTasks: 0, inactiveTasks: 0 },
    {id: 3, name: 'Andrew Skates', activeTasks: 0, inactiveTasks: 0 },
    {id: 4, name: 'Dr Nigel Shardlow', activeTasks: 0, inactiveTasks: 0 },
    {id: 5, name: 'Samuel Lesuffleur', activeTasks: 0, inactiveTasks: 0 },
    {id: 6, name: 'Thomas French', activeTasks: 0, inactiveTasks: 0 },
    {id: 7, name: 'Dr Bernard Kujawski', activeTasks: 0, inactiveTasks: 0 },
    {id: 8, name: 'Kirstie Skates', activeTasks: 0, inactiveTasks: 0 },
    {id: 9, name: 'Dr Lies Boelen', activeTasks: 0, inactiveTasks: 0 },
    {id: 10, name: 'Dr Florean Roesller', activeTasks: 0, inactiveTasks: 0 },
  ];

  tasksToCreate =  [
    {
      id: 1,
      name: 'Task 1',
      desc: 'Task 1 Desc',
      teamMembers: [1, 2, 3, 4], // id of team memeber
      active: true,
    }
  ];
  taskList: Task[];

  constructor() { }


  initialSetup() {
    for (let i = 0; i < this.tasksToCreate.length; i ++) {
      this.taskAdded(this.tasksToCreate[i]);
    }
    this.taskList = [...this.tasksToCreate];
  }

  generateTaskList(): Observable<Task[]> {
    return from([this.taskList]);
  }

  taskAdded(newTask: Task) {
    this.teamMembers = this.teamMembers
      .map(
        member => {
          if (newTask.teamMembers.indexOf(member.id) > -1) {
            return {
              ...member,
              activeTasks: (newTask.active) ? member.activeTasks + 1 : member.activeTasks,
              inactiveTasks:  (!newTask.active) ? member.inactiveTasks + 1 : member.inactiveTasks,
            };
          } else {
            return member;
          }
        }
      );
  }

  checkMemberCapacity(memberId: number) {
    const numberTasks = this.taskList.filter(t => t.teamMembers.indexOf(memberId) !== -1).length;
      if (numberTasks >= 5) {
        return numberTasks;
      }
  }

  deleteTask(taskToRemove: Task) {
    this.taskList = this.taskList.filter(task => task.id !== taskToRemove.id);
    this.generateTaskList();
  }

  addTask(task) {
    this.taskList.push(task);
    this.taskAdded(task);
  }
  addMember(task: Task, member) {
    this.taskList.map(t => {
      return {
        ...t,
        teamMembers: (t.id === task.id) ? t.teamMembers.push(member) : t.teamMembers
      };
    });
  }

  removeMember(task, member) {
    this.taskList = this.taskList.map(t => {
      return {
        ...t,
        teamMembers: (t.id === task.id) ? t.teamMembers.filter(m => m !== member) : t.teamMembers
      };
    });
  }

  getMemberById(id) {
    const filteredTeam = this.teamMembers.filter(t => t.id === id);
    if (filteredTeam.length) {
      return filteredTeam[0];
    }
  }

  markTaskComplete(task) {
    this.taskList = this.taskList.map(t => {
      return {
        ...t,
        active: (t.id === task.id) ? false : t.active
      };
    });
  }

  getAvailableTeam(task: Task) {
    return this.teamMembers.filter(
      t => !task.teamMembers.includes(t.id)
    );
  }
}
