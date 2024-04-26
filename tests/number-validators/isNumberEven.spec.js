import { expect } from 'chai';
import {
  describe, beforeEach, afterEach, it,
} from 'mocha';
import NumbersValidator from '../../app/numbers_validators.js';

describe('isNumberEven', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  // Test case 1: When it is even number
  it('shold return true if number is even', () => {
    expect(validator.isNumberEven(4)).to.be.equal(true);
  });

  // Test case 2: When it is odd number
  it('should return false if number is odd', () => {
    expect(validator.isNumberEven(5)).to.be.equal(false);
  });

  // Test case 3: When it is string istead of number
  it('should throw an error when provided with string', () => {
    expect(() => {
      validator.isNumberEven('4');
    }).to.throw('[4] is not of type "Number" it is of type "string"');
  });
});
