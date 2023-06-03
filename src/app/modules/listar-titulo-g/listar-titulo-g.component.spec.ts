import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTituloGComponent } from './listar-titulo-g.component';

describe('ListarTituloGComponent', () => {
  let component: ListarTituloGComponent;
  let fixture: ComponentFixture<ListarTituloGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarTituloGComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarTituloGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
