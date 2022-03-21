import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { mencionFormComponent } from './mencion-form.component';

describe('mencionFormComponent', () => {
  let component: mencionFormComponent;
  let fixture: ComponentFixture<mencionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ mencionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(mencionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

