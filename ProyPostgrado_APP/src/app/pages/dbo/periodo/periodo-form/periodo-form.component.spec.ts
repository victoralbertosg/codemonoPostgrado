import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { periodoFormComponent } from './periodo-form.component';

describe('periodoFormComponent', () => {
  let component: periodoFormComponent;
  let fixture: ComponentFixture<periodoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ periodoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(periodoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

