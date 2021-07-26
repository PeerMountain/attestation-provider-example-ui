import {AttestationEntity} from "./attestation-entity";

export interface AttestationResponse {
  entity: AttestationEntity,
  redirectUrl: string
}
