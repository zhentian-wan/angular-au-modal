import { TestBed, inject } from '@angular/core/testing';

import { AuModalService } from './au-modal.service';

describe('AuModalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuModalService]
    });
  });

  it('should be created', inject([AuModalService], (service: AuModalService) => {
    expect(service).toBeTruthy();
  }));
});
