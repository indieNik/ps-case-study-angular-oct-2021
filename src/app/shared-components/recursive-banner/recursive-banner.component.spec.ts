import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecursiveBannerComponent } from './recursive-banner.component';

describe('RecursiveBannerComponent', () => {
  let component: RecursiveBannerComponent;
  let fixture: ComponentFixture<RecursiveBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecursiveBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecursiveBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
