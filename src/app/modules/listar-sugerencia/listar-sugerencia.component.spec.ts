import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarSugerenciaComponent } from './listar-sugerencia.component';

describe('ListarSugerenciaComponent', () => {
  let component: ListarSugerenciaComponent;
  let fixture: ComponentFixture<ListarSugerenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarSugerenciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarSugerenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
