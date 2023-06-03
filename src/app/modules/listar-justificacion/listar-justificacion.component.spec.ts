import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarJustificacionComponent } from './listar-justificacion.component';

describe('ListarJustificacionComponent', () => {
  let component: ListarJustificacionComponent;
  let fixture: ComponentFixture<ListarJustificacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarJustificacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarJustificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
