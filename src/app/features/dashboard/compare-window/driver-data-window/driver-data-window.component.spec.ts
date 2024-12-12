import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverDataWindowComponent } from './driver-data-window.component';

describe('DriverDataWindowComponent', () => {
  let component: DriverDataWindowComponent;
  let fixture: ComponentFixture<DriverDataWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DriverDataWindowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DriverDataWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
