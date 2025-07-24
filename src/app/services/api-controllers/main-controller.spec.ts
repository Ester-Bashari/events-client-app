import {TestBed} from '@angular/core/testing';

import {MainController} from './main-controller';

describe('MainController', () => {
  let service: MainController;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
