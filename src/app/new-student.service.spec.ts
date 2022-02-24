import { TestBed } from '@angular/core/testing';

import { NewStudentService } from './new-student.service';

describe('NewStudentService', () => {
  let service: NewStudentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewStudentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
