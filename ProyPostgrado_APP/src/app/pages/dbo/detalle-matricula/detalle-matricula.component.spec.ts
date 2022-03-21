import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { detalle_matriculaComponent } from './detalle-matricula.component';

describe('detalle_matriculaComponent', () => {
  let component: detalle_matriculaComponent;
  let fixture: ComponentFixture<detalle_matriculaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ detalle_matriculaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(detalle_matriculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

