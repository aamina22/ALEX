import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerListaDeItemComponent } from './ver-lista-de-item.component';

describe('VerListaDeItemComponent', () => {
  let component: VerListaDeItemComponent;
  let fixture: ComponentFixture<VerListaDeItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerListaDeItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerListaDeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
