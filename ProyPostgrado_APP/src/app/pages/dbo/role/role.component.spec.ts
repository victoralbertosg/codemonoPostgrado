import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { roleComponent } from './role.component';

describe('roleComponent', () => {
  let component: roleComponent;
  let fixture: ComponentFixture<roleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ roleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(roleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

