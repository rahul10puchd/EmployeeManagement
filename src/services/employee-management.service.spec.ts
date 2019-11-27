import { TestBed } from '@angular/core/testing';

import { EmployeeManagementService } from './employee-management.service';

describe('EmployeeManagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeeManagementService = TestBed.get(EmployeeManagementService);
    expect(service).toBeTruthy();
  });
});
