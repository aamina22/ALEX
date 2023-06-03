import { TestBed } from '@angular/core/testing';

import { HipotesisService } from './hipotesis.service';

describe('HipotesisService', () => {
  let service: HipotesisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HipotesisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
