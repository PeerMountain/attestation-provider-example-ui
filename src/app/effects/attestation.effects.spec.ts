import {TestBed} from '@angular/core/testing';
import {provideMockActions} from '@ngrx/effects/testing';
import {Observable} from 'rxjs';

import {AttestationEffects} from './attestation.effects';
import {AttestationService} from "../services/attestation.service";

describe('AttestationEffects', () => {
  let actions$: Observable<any>;
  let effects: AttestationEffects;
  const attestationServiceMock = {}

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AttestationEffects,
        provideMockActions(() => actions$),
        {provide: AttestationService, useValue: attestationServiceMock}
      ]
    });

    effects = TestBed.inject(AttestationEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
