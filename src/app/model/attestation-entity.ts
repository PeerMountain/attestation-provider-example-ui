export interface AttestationEntity {
  id: number
  userId: number
  attestationData: string
  attestationTime: string
  hashKeyArray: string
  hashedData: string
  signature: string,
  tokenUri: string,
}
