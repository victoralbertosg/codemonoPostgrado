import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { facultadListComponent } from './facultad-list.component';

describe('facultadListComponent', () => {
  let component: facultadListComponent;
  let fixture: ComponentFixture<facultadListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ facultadListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(facultadListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

