import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { mencionComponent } from './mencion.component';

describe('mencionComponent', () => {
  let component: mencionComponent;
  let fixture: ComponentFixture<mencionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ mencionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(mencionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

