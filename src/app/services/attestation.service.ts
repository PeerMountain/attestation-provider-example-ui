import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ValidationSignatureRequest} from "../model/validation-signature-request";
import {AttestationUrlEntity} from "../model/attestation-url-entity";
import {Observable} from "rxjs";

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
}