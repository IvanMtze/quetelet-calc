import { TestBed } from '@angular/core/testing';

import { ImcMaleService } from './imc-male.service';

describe('ImcMaleService', () => {
  let service: ImcMaleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImcMaleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
