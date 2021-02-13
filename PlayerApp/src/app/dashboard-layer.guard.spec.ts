import { TestBed } from '@angular/core/testing';

import { DashboardLayerGuard } from './dashboard-layer.guard';

describe('DashboardLayerGuard', () => {
  let guard: DashboardLayerGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DashboardLayerGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
