import { TestBed } from '@angular/core/testing';

import { SecuredHttpInterceptor } from './secured-http.interceptor';

describe('SecuredHttpInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      SecuredHttpInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: SecuredHttpInterceptor = TestBed.inject(SecuredHttpInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
