import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {
  ATTESTATION_ENTITY_RESPONSE,
  attestationEntityResponse,
  redirectRequest,
  SEND_DATA_FOR_ATTESTATION_REQUEST,
  VERIFY_CHALLENGE_SIGNATURE_REQUEST,
  verifyChallengeSignatureResponse
} from "../actions/attestation.actions";
import {map, mergeMap} from "rxjs/operators";
import {AttestationService} from "../services/attestation.service";
import {AttestationUrlEntity} from "../model/attestation-url-entity";
import {ValidationSignatureRequest} from "../model/validation-signature-request";
import {DataForAttestationRequest} from "../model/data-for-attestation-request";
import {AttestationResponse} from "../model/attestation-response";

@Injectable()
export class AttestationEffects {

  verifyChallengeSignatureRequestToService = createEffect(() =>
    this.actions$.pipe(
      ofType(VERIFY_CHALLENGE_SIGNATURE_REQUEST),
      mergeMap((action: ValidationSignatureRequest) => this.attestationService.validateSignature(action)),
      map((res: AttestationUrlEntity) => verifyChallengeSignatureResponse(res))
    )
  )

  sendDataForAttestation = createEffect(() =>
    this.actions$.pipe(
      ofType(SEND_DATA_FOR_ATTESTATION_REQUEST),
      mergeMap((action: DataForAttestationRequest) => this.attestationService.postAttestationData(action)),
      map((res: AttestationResponse) => attestationEntityResponse(res)),
    )
  )

  redirectRequest = createEffect(() =>
    this.actions$.pipe(
      ofType(ATTESTATION_ENTITY_RESPONSE),
      map((action: AttestationResponse) => redirectRequest({
        url: `${action.redirectUrl}?signature=${action.entity.signature}`
      }))
    )
  )

  constructor(
    private actions$: Actions,
    private attestationService: AttestationService
  ) {
  }

}
