import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { cursoComponent } from './curso.component';

describe('cursoComponent', () => {
  let component: cursoComponent;
  let fixture: ComponentFixture<cursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ cursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(cursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

