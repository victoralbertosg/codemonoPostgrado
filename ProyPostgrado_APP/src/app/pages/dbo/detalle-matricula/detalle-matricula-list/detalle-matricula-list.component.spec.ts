import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { detalle_matriculaListComponent } from './detalle-matricula-list.component';

describe('detalle_matriculaListComponent', () => {
  let component: detalle_matriculaListComponent;
  let fixture: ComponentFixture<detalle_matriculaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ detalle_matriculaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(detalle_matriculaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

