import { expect } from 'chai';
import {
  describe, beforeEach, afterEach, it,
} from 'mocha';
import NumbersValidator from '../../app/numbers_validators.js';

describe('getEvenNumbersFromArray', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });
  // Test case 1: When array contains odd and even numbers
  it('should return array containing even numbers from input array', () => {
    const inputArray = [1, 2, 3, 4, 5];
    const expectedOutput = [2, 4];
    expect(validator.getEvenNumbersFromArray(inputArray)).to.deep.equal(expectedOutput);
  });

  // Test case 2: When array contains odd numbers
  it('should return empty array if ther are no even numbers in input array', () => {
    const inputArray = [1, 3, 5];
    expect(validator.getEvenNumbersFromArray(inputArray)).to.be.an('array').that.is.empty;
  });

  // Test case 3: When array contains even numbers
  it('should return the same array as an input array', () => {
    const inputArray = [2, 4];
    expect(validator.getEvenNumbersFromArray(inputArray)).to.deep.equal(inputArray);
  });

  // Test case 4: When array is epmty
  it('should return the same array as an input array', () => {
    const inputArray = [];
    expect(validator.getEvenNumbersFromArray(inputArray)).to.deep.equal(inputArray);
  });

  // Test case 5: When you pass string instead of array
  it('should throw an error if the input is not an array', () => {
    const inputArray = 'array';
    expect(() => {
      validator.getEvenNumbersFromArray(inputArray);
    }).to.throw('[array] is not an array of "Numbers"');
  });
});
