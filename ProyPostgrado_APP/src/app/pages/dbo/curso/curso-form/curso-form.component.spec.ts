import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { cursoFormComponent } from './curso-form.component';

describe('cursoFormComponent', () => {
  let component: cursoFormComponent;
  let fixture: ComponentFixture<cursoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ cursoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(cursoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

