import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveGraphicsComponent } from './live-graphics.component';

describe('LiveGraphicsComponent', () => {
  let component: LiveGraphicsComponent;
  let fixture: ComponentFixture<LiveGraphicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiveGraphicsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiveGraphicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
