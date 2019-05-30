import { TestBed } from '@angular/core/testing';

import { RecordserviceService } from './recordservice.service';

describe('RecordserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecordserviceService = TestBed.get(RecordserviceService);
    expect(service).toBeTruthy();
  });
});
