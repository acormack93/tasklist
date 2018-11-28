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
  it('should get member by id correctly', inject([DataServiceService], (service: DataServiceService) => {
    service.teamMembers =  [
      {id: 1, name: 'Dr Annie Hou', activeTasks: 0, inactiveTasks: 0 },
      {id: 2, name: 'Céline Aussourd', activeTasks: 0, inactiveTasks: 0 }
    ];
    expect(service.getMemberById(1).name).toEqual('Dr Annie Hou');
  }));

});
