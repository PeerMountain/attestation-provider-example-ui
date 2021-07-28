import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ValidationSignatureRequest} from "../model/validation-signature-request";
import {AttestationUrlEntity} from "../model/attestation-url-entity";
import {Observable} from "rxjs";
import {DataForAttestationRequest} from "../model/data-for-attestation-request";
import {AttestationEntity} from "../model/attestation-entity";
import {AttestationResponse} from "../model/attestation-response";

@Injectable({
  providedIn: 'root'
})
export class AttestationService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public validateSignature(request: ValidationSignatureRequest): Observable<AttestationUrlEntity> {
    return this.httpClient.post<AttestationUrlEntity>('/api/attestation/validate', request)
  }

  public postAttestationData(request: DataForAttestationRequest): Observable<AttestationResponse> {
    return this.httpClient.post<AttestationResponse>('/api/attestation/', request)
  }

  public getAttestationData(attestationId: number): Observable<AttestationEntity> {
    return this.httpClient.get<AttestationEntity>(`/api/attestation/${attestationId}`)
  }
}
