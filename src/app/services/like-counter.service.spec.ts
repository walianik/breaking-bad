import { TestBed } from '@angular/core/testing';

import { LikeCounterService } from './like-counter.service';

describe('LikeCounterService', () => {
  let service: LikeCounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LikeCounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
