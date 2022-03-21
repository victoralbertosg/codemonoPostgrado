import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { roleListComponent } from './role-list.component';

describe('roleListComponent', () => {
  let component: roleListComponent;
  let fixture: ComponentFixture<roleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ roleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(roleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

