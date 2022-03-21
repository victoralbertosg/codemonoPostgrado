import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { periodoListComponent } from './periodo-list.component';

describe('periodoListComponent', () => {
  let component: periodoListComponent;
  let fixture: ComponentFixture<periodoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ periodoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(periodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

