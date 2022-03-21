import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { inscripcionComponent } from './inscripcion.component';

describe('inscripcionComponent', () => {
  let component: inscripcionComponent;
  let fixture: ComponentFixture<inscripcionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ inscripcionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(inscripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

