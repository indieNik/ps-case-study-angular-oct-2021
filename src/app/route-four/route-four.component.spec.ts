import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteFourComponent } from './route-four.component';

describe('RouteFourComponent', () => {
  let component: RouteFourComponent;
  let fixture: ComponentFixture<RouteFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
