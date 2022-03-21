import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { detalle_matriculaFormComponent } from './detalle-matricula-form.component';

describe('detalle_matriculaFormComponent', () => {
  let component: detalle_matriculaFormComponent;
  let fixture: ComponentFixture<detalle_matriculaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ detalle_matriculaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(detalle_matriculaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

