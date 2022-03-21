import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { alumno_avanceFormComponent } from './alumno-avance-form.component';

describe('alumno_avanceFormComponent', () => {
  let component: alumno_avanceFormComponent;
  let fixture: ComponentFixture<alumno_avanceFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ alumno_avanceFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(alumno_avanceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

