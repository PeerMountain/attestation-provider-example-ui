import { createAction, props } from '@ngrx/store';
import {ValidationSignatureRequest} from "../model/validation-signature-request";
import {AttestationUrlEntity} from "../model/attestation-url-entity";

export const VERIFY_CHALLENGE_SIGNATURE_REQUEST = '[Attestation] Verify Challenge Signature Request'
export const VERIFY_CHALLENGE_SIGNATURE_RESPONSE = '[Attestation] Verify Challenge Signature Response'

export const verifyChallengeSignatureRequest = createAction(
  VERIFY_CHALLENGE_SIGNATURE_REQUEST,
  props<ValidationSignatureRequest>()
);

export const verifyChallengeSignatureResponse = createAction(
  VERIFY_CHALLENGE_SIGNATURE_RESPONSE,
  props<AttestationUrlEntity>()
)



