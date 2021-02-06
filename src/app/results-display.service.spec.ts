import { TestBed } from '@angular/core/testing';

import { ResultsDisplayService } from './results-display.service';

describe('ResultsDisplayService', () => {
  let service: ResultsDisplayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResultsDisplayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
