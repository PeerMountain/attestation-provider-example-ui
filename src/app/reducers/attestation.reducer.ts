import {createReducer, on} from '@ngrx/store';
import {
  redirectRequest,
  verifyChallengeSignatureRequest,
  verifyChallengeSignatureResponse
} from "../actions/attestation.actions";


export const attestationFeatureKey = 'attestation';

export interface AttestationState {
  verificationSuccess: boolean,
  redirectUrl?: string,
}

export const initialAttestationState: AttestationState = {
  verificationSuccess: false
};


export const attestationReducer = createReducer(
  initialAttestationState,
  on(verifyChallengeSignatureRequest, (state, action) => {
    return {
      ...state,
      verificationSuccess: false,
    }
  }),
  on(verifyChallengeSignatureResponse, (state, action) => {
    return {
      ...state,
      verificationSuccess: true
    }
  }),
  on(redirectRequest, (state, action) => {
    return {
      ...state,
      redirectUrl: action.url
    }
  })
);

