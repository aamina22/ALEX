import { TestBed } from '@angular/core/testing';

import { ObjectivoGService } from './objectivo-g.service';

describe('ObjectivoGService', () => {
  let service: ObjectivoGService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObjectivoGService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
