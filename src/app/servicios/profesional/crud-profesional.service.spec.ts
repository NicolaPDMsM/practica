import { TestBed } from '@angular/core/testing';

import { CrudProfesionalService } from './crud-profesional.service';

describe('CrudProfesionalService', () => {
  let service: CrudProfesionalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudProfesionalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
