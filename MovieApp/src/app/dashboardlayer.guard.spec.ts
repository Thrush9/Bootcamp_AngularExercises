import { TestBed } from '@angular/core/testing';

import { DashboardlayerGuard } from './dashboardlayer.guard';

describe('DashboardlayerGuard', () => {
  let guard: DashboardlayerGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DashboardlayerGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
