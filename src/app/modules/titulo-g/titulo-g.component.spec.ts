import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloGComponent } from './titulo-g.component';

describe('TituloGComponent', () => {
  let component: TituloGComponent;
  let fixture: ComponentFixture<TituloGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TituloGComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TituloGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
