import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerListaDeRegistroAnteProyectoComponent } from './ver-lista-de-registro-ante-proyecto.component';

describe('VerListaDeRegistroAnteProyectoComponent', () => {
  let component: VerListaDeRegistroAnteProyectoComponent;
  let fixture: ComponentFixture<VerListaDeRegistroAnteProyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerListaDeRegistroAnteProyectoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerListaDeRegistroAnteProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
