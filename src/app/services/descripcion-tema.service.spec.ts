import { TestBed } from '@angular/core/testing';

import { DescripcionTemaService } from './descripcion-tema.service';

describe('DescripcionTemaService', () => {
  let service: DescripcionTemaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DescripcionTemaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
