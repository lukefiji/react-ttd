import { maxNumber } from './index';

describe('maxNumber', () => {
  describe('given an empty array', () => {
    it('should return 0', () => {
      expect(maxNumber([])).toEqual(0);
    });
  });

  describe('given an array of numbers', () => {
    it('should return the max number', () => {
      expect(maxNumber([2, 3, 1])).toEqual(3);
    });
  });
});
