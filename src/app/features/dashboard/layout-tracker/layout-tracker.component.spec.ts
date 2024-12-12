import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutTrackerComponent } from './layout-tracker.component';

describe('LayoutTrackerComponent', () => {
  let component: LayoutTrackerComponent;
  let fixture: ComponentFixture<LayoutTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutTrackerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
