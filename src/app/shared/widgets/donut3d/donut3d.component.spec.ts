import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Donut3dComponent } from './donut3d.component';

describe('Donut3dComponent', () => {
  let component: Donut3dComponent;
  let fixture: ComponentFixture<Donut3dComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Donut3dComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Donut3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
