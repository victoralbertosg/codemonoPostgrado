import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { cursoListComponent } from './curso-list.component';

describe('cursoListComponent', () => {
  let component: cursoListComponent;
  let fixture: ComponentFixture<cursoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ cursoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(cursoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

