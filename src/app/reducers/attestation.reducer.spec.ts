import { attestationReducer, initialState } from './attestation.reducer';

describe('Attestation Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = attestationReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
