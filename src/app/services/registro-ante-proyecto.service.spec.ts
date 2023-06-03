import { TestBed } from '@angular/core/testing';

import { RegistroAnteProyectoService } from './registro-ante-proyecto.service';

describe('RegistroAnteProyectoService', () => {
  let service: RegistroAnteProyectoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistroAnteProyectoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
