import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { inscripcionListComponent } from './inscripcion-list.component';

describe('inscripcionListComponent', () => {
  let component: inscripcionListComponent;
  let fixture: ComponentFixture<inscripcionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ inscripcionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(inscripcionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

