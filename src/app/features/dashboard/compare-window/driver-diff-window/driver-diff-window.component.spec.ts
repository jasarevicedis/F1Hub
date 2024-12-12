import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverDiffWindowComponent } from './driver-diff-window.component';

describe('DriverDiffWindowComponent', () => {
  let component: DriverDiffWindowComponent;
  let fixture: ComponentFixture<DriverDiffWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DriverDiffWindowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DriverDiffWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
