import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectivoGComponent } from './objectivo-g.component';

describe('ObjectivoGComponent', () => {
  let component: ObjectivoGComponent;
  let fixture: ComponentFixture<ObjectivoGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjectivoGComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObjectivoGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
