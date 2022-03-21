import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { mencionListComponent } from './mencion-list.component';

describe('mencionListComponent', () => {
  let component: mencionListComponent;
  let fixture: ComponentFixture<mencionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ mencionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(mencionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

