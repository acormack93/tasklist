import { Component, OnInit, Input } from '@angular/core';
import { TeamMember } from '../shared/data-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  @Input() team: TeamMember[];

  constructor() { }

  ngOnInit() {
  }

}
