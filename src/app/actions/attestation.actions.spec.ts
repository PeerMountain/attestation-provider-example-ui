import * as fromAttestation from './attestation.actions';
import {VERIFY_CHALLENGE_SIGNATURE_REQUEST} from './attestation.actions';

describe('attestationAttestations', () => {
  it('should return an action', () => {
    expect(fromAttestation.verifyChallengeSignatureRequest({} as any).type).toBe(VERIFY_CHALLENGE_SIGNATURE_REQUEST);
  });
});
