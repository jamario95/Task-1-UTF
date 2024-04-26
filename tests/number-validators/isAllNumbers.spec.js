import { expect } from 'chai';
import {
  describe, beforeEach, afterEach, it,
} from 'mocha';
import NumbersValidator from '../../app/numbers_validators.js';

describe('isAllNumbers', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  // Test case 1: When array contains only numbers
  it('should return true when array contains only numbers', () => {
    const inputArray = [1, 2, 3];
    expect(validator.isAllNumbers(inputArray)).to.be.equal(true);
  });

  // Test case 2: When array is empty
  it('should return true when array is empty', () => {
    const inputArray = [];
    expect(validator.isAllNumbers(inputArray)).to.be.equal(true);
  });

  // Test case 3: When array contains numbers and string
  it('should return false when does not array contain only numbers', () => {
    const inputArray = [1, '2', 4];
    expect(validator.isAllNumbers(inputArray)).to.be.equal(false);
  });

  // Test case 1: When pass string instead of an array
  it('should throw an error when it is not array', () => {
    const inputArray = '1, 2, 3';
    expect(() => {
      validator.isAllNumbers(inputArray);
    }).to.throw('[1, 2, 3] is not an array');
  });
});
