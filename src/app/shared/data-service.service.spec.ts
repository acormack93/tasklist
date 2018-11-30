import { TestBed, inject } from '@angular/core/testing';

import { DataServiceService } from './data-service.service';

describe('DataServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataServiceService]
    });
  });

  it('should be created', inject([DataServiceService], (service: DataServiceService) => {
    expect(service).toBeTruthy();
  }));

  // Example unit test
  it('should get member by id', inject([DataServiceService], (service: DataServiceService) => {
    service.teamMembers =  [
      {id: 1, name: 'Dr Annie Hou', activeTasks: 0, inactiveTasks: 0 },
      {id: 2, name: 'Céline Aussourd', activeTasks: 0, inactiveTasks: 0 }
    ];
    expect(service.getMemberById(1).name).toEqual('Dr Annie Hou');
  }));

  it('should get assing active tasks to staff', inject([DataServiceService], (service: DataServiceService) => {
    service.teamMembers =  [
      {id: 1, name: 'Dr Annie Hou', activeTasks: 0, inactiveTasks: 0 },
      {id: 2, name: 'Céline Aussourd', activeTasks: 0, inactiveTasks: 0 }
    ];

    service.tasksToCreate =  [
      {
        id: 1,
        name: 'Task 1',
        desc: 'Task 1 Desc',
        teamMembers: [1, 2, 3, 4], // id of team memeber
        active: true,
      }
    ];
    service.initialSetup();
    expect(service.teamMembers[0].activeTasks).toEqual(1);
  }));

  it('should get member capactity by id', inject([DataServiceService], (service: DataServiceService) => {
    service.teamMembers =  [
      {id: 1, name: 'Dr Annie Hou', activeTasks: 0, inactiveTasks: 0 },
      {id: 2, name: 'Céline Aussourd', activeTasks: 0, inactiveTasks: 0 }
    ];

    service.tasksToCreate =  [
      {
        id: 1,
        name: 'Task 1',
        desc: 'Task 1 Desc',
        teamMembers: [1, 2, 3, 4], // id of team memeber
        active: true,
      }
    ];
    service.initialSetup();
    expect(service.teamMembers[0].activeTasks).toEqual(1);
  }));

});
