import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { alumno_avanceListComponent } from './alumno-avance-list.component';

describe('alumno_avanceListComponent', () => {
  let component: alumno_avanceListComponent;
  let fixture: ComponentFixture<alumno_avanceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ alumno_avanceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(alumno_avanceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

