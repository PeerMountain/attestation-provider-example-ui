import {createAction, props} from '@ngrx/store';
import {AttestationUrlEntity} from "../model/attestation-url-entity";
import {DataForAttestationRequest} from "../model/data-for-attestation-request";
import {AttestationResponse} from "../model/attestation-response";
import {OracleRedirectParams} from "../model/oracle-redirect-params";
import {AttestationDataRequest} from "../model/attestation-data-request";
import {AttestationEntity} from "../model/attestation-entity";

export const VERIFY_CHALLENGE_SIGNATURE_REQUEST = '[Attestation] Verify Challenge Signature Request'
export const VERIFY_CHALLENGE_SIGNATURE_RESPONSE = '[Attestation] Verify Challenge Signature Response'
export const SEND_DATA_FOR_ATTESTATION_REQUEST = '[Attestation] Send Data For attestation to provider'
export const ATTESTATION_ENTITY_RESPONSE = '[Attestation] Receive signature from provider'
export const ATTESTATION_DATA_REQUEST = '[Attestation] Request attestation data for specific id'
export const ATTESTATION_DATA_RESPONSE = '[Attestation] Attestation data for specific id response'

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

export const attestationDataRequest = createAction(
  ATTESTATION_DATA_REQUEST,
  props<AttestationDataRequest>(),
)

export const attestationDataResponse = createAction(
  ATTESTATION_DATA_RESPONSE,
  props<AttestationEntity>()
)




