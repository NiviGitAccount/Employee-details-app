import { TestBed } from '@angular/core/testing';

import { AddEmpServiceService } from './add-emp-service.service';

describe('AddEmpServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddEmpServiceService = TestBed.get(AddEmpServiceService);
    expect(service).toBeTruthy();
  });
});
