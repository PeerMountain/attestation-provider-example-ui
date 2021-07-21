import * as fromAttestation from './attestation.actions';

describe('attestationAttestations', () => {
  it('should return an action', () => {
    expect(fromAttestation.attestationAttestations().type).toBe('[Attestation] Attestation Attestations');
  });
});
