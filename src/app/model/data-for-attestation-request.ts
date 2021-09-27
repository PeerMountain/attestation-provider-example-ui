export interface DataForAttestationRequest {
  attestationData: string
  userAddress: string
  challenge: string
  signature: string
  token: string,
  nftType: number
}
