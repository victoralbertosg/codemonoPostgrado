import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { inscripcionFormComponent } from './inscripcion-form.component';

describe('inscripcionFormComponent', () => {
  let component: inscripcionFormComponent;
  let fixture: ComponentFixture<inscripcionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ inscripcionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(inscripcionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

