import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {VERIFY_CHALLENGE_SIGNATURE_REQUEST, verifyChallengeSignatureResponse} from "../actions/attestation.actions";
import {map, mergeMap} from "rxjs/operators";
import {AttestationService} from "../services/attestation.service";
import {AttestationUrlEntity} from "../model/attestation-url-entity";
import {ValidationSignatureRequest} from "../model/validation-signature-request";

@Injectable()
export class AttestationEffects {

  verifyChallengeSignatureRequestToService = createEffect(() =>
    this.actions$.pipe(
      ofType(VERIFY_CHALLENGE_SIGNATURE_REQUEST),
      mergeMap((action: ValidationSignatureRequest) => this.attestationService.validateSignature(action)),
      map((res: AttestationUrlEntity) => verifyChallengeSignatureResponse(res))
    )
  )


  constructor(
    private actions$: Actions,
    private attestationService: AttestationService
    ) {
  }

}
