import { expect } from 'chai';
import {
  describe, beforeEach, afterEach, it,
} from 'mocha';
import NumbersValidator from '../../app/numbers_validators.js';

describe('isInteger', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  // Test case 1: When it is number
  it('should return true if n is an int', () => {
    expect(validator.isInteger(4)).to.be.equal(true);
  });

  // Test case 2: When it is string instead of number
  it('should return false if n is not an int', () => {
    expect(() => {
      validator.isInteger('4');
    }).to.throw('[4] is not a number');
  });
});
