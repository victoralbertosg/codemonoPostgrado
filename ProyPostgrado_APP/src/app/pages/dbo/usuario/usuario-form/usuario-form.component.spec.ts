import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { usuarioFormComponent } from './usuario-form.component';

describe('usuarioFormComponent', () => {
  let component: usuarioFormComponent;
  let fixture: ComponentFixture<usuarioFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ usuarioFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(usuarioFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

