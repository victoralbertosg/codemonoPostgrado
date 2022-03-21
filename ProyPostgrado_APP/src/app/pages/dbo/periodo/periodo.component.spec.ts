import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { periodoComponent } from './periodo.component';

describe('periodoComponent', () => {
  let component: periodoComponent;
  let fixture: ComponentFixture<periodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ periodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(periodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

