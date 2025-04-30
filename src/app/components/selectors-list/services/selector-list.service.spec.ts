import { TestBed } from '@angular/core/testing';

import { SelectorListService } from './selector-list.service';

describe('SelectorListService', () => {
  let service: SelectorListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectorListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
