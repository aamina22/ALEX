import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarHipotesisComponent } from './listar-hipotesis.component';

describe('ListarHipotesisComponent', () => {
  let component: ListarHipotesisComponent;
  let fixture: ComponentFixture<ListarHipotesisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarHipotesisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarHipotesisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
