import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacionDeItemComponent } from './creacion-de-item.component';

describe('CreacionDeItemComponent', () => {
  let component: CreacionDeItemComponent;
  let fixture: ComponentFixture<CreacionDeItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreacionDeItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreacionDeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
