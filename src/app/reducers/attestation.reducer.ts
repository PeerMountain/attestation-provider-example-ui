import {createReducer, on} from '@ngrx/store';
import {verifyChallengeSignatureRequest, verifyChallengeSignatureResponse} from "../actions/attestation.actions";


export const attestationFeatureKey = 'attestation';

export interface AttestationState {
  verificationSuccess: boolean
}

export const initialState: AttestationState = {
  verificationSuccess: false
};


export const attestationReducer = createReducer(
  initialState,
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
  })
);

