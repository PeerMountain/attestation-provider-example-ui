import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {
  attestationEntityResponse,
  SEND_DATA_FOR_ATTESTATION_REQUEST,
  VERIFY_CHALLENGE_SIGNATURE_REQUEST,
  verifyChallengeSignatureResponse
} from "../actions/attestation.actions";
import {map, mergeMap} from "rxjs/operators";
import {AttestationService} from "../services/attestation.service";
import {AttestationUrlEntity} from "../model/attestation-url-entity";
import {DataForAttestationRequest} from "../model/data-for-attestation-request";
import {AttestationResponse} from "../model/attestation-response";
import {OracleRedirectParams} from "../model/oracle-redirect-params";

@Injectable()
export class AttestationEffects {

  verifyChallengeSignatureRequestToService = createEffect(() =>
    this.actions$.pipe(
      ofType(VERIFY_CHALLENGE_SIGNATURE_REQUEST),
      mergeMap((action: OracleRedirectParams) => this.attestationService.validateSignature({
        challenge: action.challenge,
        signature: action.signature,
        userAddress: action.userAddress,
        token: action.token,
      })),
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

  constructor(
    private actions$: Actions,
    private attestationService: AttestationService
  ) {
  }

}
