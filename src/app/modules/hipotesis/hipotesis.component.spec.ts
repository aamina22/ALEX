import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HipotesisComponent } from './hipotesis.component';

describe('HipotesisComponent', () => {
  let component: HipotesisComponent;
  let fixture: ComponentFixture<HipotesisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HipotesisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HipotesisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
