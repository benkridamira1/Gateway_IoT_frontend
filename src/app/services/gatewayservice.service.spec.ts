import { TestBed } from '@angular/core/testing';

import { GatewayserviceService } from './gatewayservice.service';

describe('GatewayserviceService', () => {
  let service: GatewayserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GatewayserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
