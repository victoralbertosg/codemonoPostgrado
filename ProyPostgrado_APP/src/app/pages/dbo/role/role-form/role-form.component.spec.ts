import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { roleFormComponent } from './role-form.component';

describe('roleFormComponent', () => {
  let component: roleFormComponent;
  let fixture: ComponentFixture<roleFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ roleFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(roleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

