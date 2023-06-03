import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescripcionTemaComponent } from './descripcion-tema.component';

describe('DescripcionTemaComponent', () => {
  let component: DescripcionTemaComponent;
  let fixture: ComponentFixture<DescripcionTemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescripcionTemaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescripcionTemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
