import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { alumno_avanceComponent } from './alumno-avance.component';

describe('alumno_avanceComponent', () => {
  let component: alumno_avanceComponent;
  let fixture: ComponentFixture<alumno_avanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ alumno_avanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(alumno_avanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

