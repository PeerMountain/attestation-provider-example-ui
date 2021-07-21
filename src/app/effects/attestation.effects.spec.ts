import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { AttestationEffects } from './attestation.effects';

describe('AttestationEffects', () => {
  let actions$: Observable<any>;
  let effects: AttestationEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AttestationEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(AttestationEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
