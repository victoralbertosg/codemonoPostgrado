import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { usuarioListComponent } from './usuario-list.component';

describe('usuarioListComponent', () => {
  let component: usuarioListComponent;
  let fixture: ComponentFixture<usuarioListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ usuarioListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(usuarioListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

