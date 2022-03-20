import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerLargeComponent } from './timer-large.component';

describe('TimerLargeComponent', () => {
  let component: TimerLargeComponent;
  let fixture: ComponentFixture<TimerLargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerLargeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
