import { TestBed } from '@angular/core/testing';

import { ImcFemaleService } from './imc-female.service';

describe('ImcFemaleService', () => {
  let service: ImcFemaleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImcFemaleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
