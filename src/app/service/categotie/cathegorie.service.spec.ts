/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CathegorieService } from './cathegorie.service';

describe('Service: Cathegorie', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CathegorieService]
    });
  });

  it('should ...', inject([CathegorieService], (service: CathegorieService) => {
    expect(service).toBeTruthy();
  }));
});
