import { TestBed } from '@angular/core/testing';

import { ListEmpService } from './list-emp.service';

describe('ListEmpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListEmpService = TestBed.get(ListEmpService);
    expect(service).toBeTruthy();
  });
});
