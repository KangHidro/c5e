import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C5eComponent } from './c5e.component';

describe('C5eComponent', () => {
  let component: C5eComponent;
  let fixture: ComponentFixture<C5eComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C5eComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C5eComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
