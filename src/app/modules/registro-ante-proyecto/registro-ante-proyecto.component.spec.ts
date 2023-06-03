import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroAnteProyectoComponent } from './registro-ante-proyecto.component';

describe('RegistroAnteProyectoComponent', () => {
  let component: RegistroAnteProyectoComponent;
  let fixture: ComponentFixture<RegistroAnteProyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroAnteProyectoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroAnteProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
