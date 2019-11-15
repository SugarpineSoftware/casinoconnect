import { TestBed } from '@angular/core/testing';

import { UserCentralService } from './user-central.service';

describe('UserCentralService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserCentralService = TestBed.get(UserCentralService);
    expect(service).toBeTruthy();
  });
});
