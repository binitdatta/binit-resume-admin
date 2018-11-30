import { TestBed } from '@angular/core/testing';

import { CareersummaryService } from './careersummary.service';

describe('CareersummaryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CareersummaryService = TestBed.get(CareersummaryService);
    expect(service).toBeTruthy();
  });
});
