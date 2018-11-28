import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {
  @Output() newTaskEvent: EventEmitter<any> = new EventEmitter();
  newTaskName: any;
  newTaskDesc: any;

  constructor() { }

  ngOnInit() {
  }
  addTask() {
    if (this.newTaskName && this.newTaskDesc) {
      this.newTaskEvent.emit(
        {
          name: this.newTaskName,
          desc: this.newTaskDesc
        }
      );
    }
  }

}
