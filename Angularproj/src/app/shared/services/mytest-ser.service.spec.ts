import { TestBed } from '@angular/core/testing';

import { MytestSerService } from './mytest-ser.service';

describe('MytestSerService', () => {
  let service: MytestSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MytestSerService);
  });


  it('check multiplication', () => {
    let serObj = new MytestSerService();
    let result = serObj.multiplic

    expect(service).toBeTruthy();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
