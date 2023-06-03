import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanteamientopComponent } from './planteamientop.component';

describe('PlanteamientopComponent', () => {
  let component: PlanteamientopComponent;
  let fixture: ComponentFixture<PlanteamientopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanteamientopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanteamientopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
