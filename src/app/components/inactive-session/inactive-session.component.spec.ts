import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InactiveSessionComponent } from './inactive-session.component';

describe('InactiveSessionComponent', () => {
  let component: InactiveSessionComponent;
  let fixture: ComponentFixture<InactiveSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InactiveSessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InactiveSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
