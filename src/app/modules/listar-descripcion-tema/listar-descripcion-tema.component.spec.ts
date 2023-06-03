import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarDescripcionTemaComponent } from './listar-descripcion-tema.component';

describe('ListarDescripcionTemaComponent', () => {
  let component: ListarDescripcionTemaComponent;
  let fixture: ComponentFixture<ListarDescripcionTemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarDescripcionTemaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarDescripcionTemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
