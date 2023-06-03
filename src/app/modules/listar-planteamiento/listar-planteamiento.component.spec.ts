import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPlanteamientoComponent } from './listar-planteamiento.component';

describe('ListarPlanteamientoComponent', () => {
  let component: ListarPlanteamientoComponent;
  let fixture: ComponentFixture<ListarPlanteamientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarPlanteamientoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarPlanteamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
