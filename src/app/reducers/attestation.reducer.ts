import {createReducer, on} from '@ngrx/store';
import {
  attestationDataRequest, attestationDataResponse,
  attestationEntityResponse,
  verifyChallengeSignatureRequest,
  verifyChallengeSignatureResponse
} from "../actions/attestation.actions";
import {RedirectUrl} from "../model/redirect-url";
import {OracleRedirectParams} from "../model/oracle-redirect-params";
import {AttestationEntity} from "../model/attestation-entity";


export const attestationFeatureKey = 'attestation';

export interface AttestationState {
  verificationSuccess: boolean,
  redirectUrl?: RedirectUrl,
  initialParams?: OracleRedirectParams,
  attestationData?: AttestationEntity
}

export const initialAttestationState: AttestationState = {
  verificationSuccess: false,
};


export const attestationReducer = createReducer(
  initialAttestationState,
  on(verifyChallengeSignatureRequest, (state, action) => {
    return {
      ...state,
      initialParams: action,
      verificationSuccess: false,
    }
  }),
  on(verifyChallengeSignatureResponse, (state, action) => {
    return {
      ...state,
      verificationSuccess: true
    }
  }),
  on(attestationEntityResponse, (state, action) => {
    return {
      ...state,
      redirectUrl: {
        url: action.redirectUrl,
        entity: action.entity
      }
    }
  }),
  on(attestationDataResponse, (state, action) => {
    return {
      ...state,
      attestationData: action
    }
  })
);

