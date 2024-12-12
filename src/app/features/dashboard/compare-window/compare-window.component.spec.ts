import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareWindowComponent } from './compare-window.component';

describe('CompareWindowComponent', () => {
  let component: CompareWindowComponent;
  let fixture: ComponentFixture<CompareWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompareWindowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompareWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
