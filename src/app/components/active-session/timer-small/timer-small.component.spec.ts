import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerSmallComponent } from './timer-small.component';

describe('TimerSmallComponent', () => {
  let component: TimerSmallComponent;
  let fixture: ComponentFixture<TimerSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerSmallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
