import {createAction, props} from '@ngrx/store';
import {ValidationSignatureRequest} from "../model/validation-signature-request";
import {AttestationUrlEntity} from "../model/attestation-url-entity";
import {DataForAttestationRequest} from "../model/data-for-attestation-request";
import {AttestationResponse} from "../model/attestation-response";
import {RedirectUrl} from "../model/redirect-url";
import {OracleRedirectParams} from "../model/oracle-redirect-params";

export const VERIFY_CHALLENGE_SIGNATURE_REQUEST = '[Attestation] Verify Challenge Signature Request'
export const VERIFY_CHALLENGE_SIGNATURE_RESPONSE = '[Attestation] Verify Challenge Signature Response'
export const SEND_DATA_FOR_ATTESTATION_REQUEST = '[Attestation] Send Data For attestation to provider'
export const ATTESTATION_ENTITY_RESPONSE = '[Attestation] Receive signature from provider'

export const verifyChallengeSignatureRequest = createAction(
  VERIFY_CHALLENGE_SIGNATURE_REQUEST,
  props<OracleRedirectParams>()
);

export const verifyChallengeSignatureResponse = createAction(
  VERIFY_CHALLENGE_SIGNATURE_RESPONSE,
  props<AttestationUrlEntity>()
)

export const sendDataForAttestationRequest = createAction(
  SEND_DATA_FOR_ATTESTATION_REQUEST,
  props<DataForAttestationRequest>()
)

export const attestationEntityResponse = createAction(
  ATTESTATION_ENTITY_RESPONSE,
  props<AttestationResponse>()
)



