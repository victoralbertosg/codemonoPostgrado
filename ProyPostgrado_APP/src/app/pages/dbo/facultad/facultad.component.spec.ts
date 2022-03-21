import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { facultadComponent } from './facultad.component';

describe('facultadComponent', () => {
  let component: facultadComponent;
  let fixture: ComponentFixture<facultadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ facultadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(facultadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

