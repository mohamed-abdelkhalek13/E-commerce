import { TestBed } from '@angular/core/testing';

import { NotAccessableGuard } from './not-accessable.guard';

describe('NotAccessableGuard', () => {
  let guard: NotAccessableGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NotAccessableGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
