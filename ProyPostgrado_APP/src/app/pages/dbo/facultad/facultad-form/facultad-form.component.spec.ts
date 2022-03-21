import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { facultadFormComponent } from './facultad-form.component';

describe('facultadFormComponent', () => {
  let component: facultadFormComponent;
  let fixture: ComponentFixture<facultadFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ facultadFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(facultadFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

