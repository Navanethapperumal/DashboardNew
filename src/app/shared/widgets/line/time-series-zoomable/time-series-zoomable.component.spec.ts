import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeSeriesZoomableComponent } from './time-series-zoomable.component';

describe('TimeSeriesZoomableComponent', () => {
  let component: TimeSeriesZoomableComponent;
  let fixture: ComponentFixture<TimeSeriesZoomableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeSeriesZoomableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeSeriesZoomableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
