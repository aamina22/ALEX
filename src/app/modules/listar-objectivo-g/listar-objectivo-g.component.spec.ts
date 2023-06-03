import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarObjectivoGComponent } from './listar-objectivo-g.component';

describe('ListarObjectivoGComponent', () => {
  let component: ListarObjectivoGComponent;
  let fixture: ComponentFixture<ListarObjectivoGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarObjectivoGComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarObjectivoGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
