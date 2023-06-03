import { TestBed } from '@angular/core/testing';

import { TituloGService } from './titulo-g.service';

describe('TituloGService', () => {
  let service: TituloGService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TituloGService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
