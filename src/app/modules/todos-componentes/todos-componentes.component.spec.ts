import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosComponentesComponent } from './todos-componentes.component';

describe('TodosComponentesComponent', () => {
  let component: TodosComponentesComponent;
  let fixture: ComponentFixture<TodosComponentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodosComponentesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodosComponentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
