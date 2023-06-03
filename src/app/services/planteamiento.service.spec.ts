import { TestBed } from '@angular/core/testing';

import { PlanteamientoService } from './planteamiento.service';

describe('PlanteamientoService', () => {
  let service: PlanteamientoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanteamientoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
