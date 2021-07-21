import { attestationReducer, initialAttestationState } from './attestation.reducer';

describe('Attestation Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = attestationReducer(initialAttestationState, action);

      expect(result).toBe(initialAttestationState);
    });
  });
});
