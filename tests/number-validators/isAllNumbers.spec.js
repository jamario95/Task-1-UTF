import { expect } from 'chai'
import { describe, beforeEach, afterEach, it } from 'mocha'
import NumbersValidator from '../../app/numbers_validators.js';

describe('isAllNumbers', () => {
    let validator;

    beforeEach( () => {
        validator = new NumbersValidator();
    })

    afterEach(() => {
        validator= null;
    })

    it('should return true when array contains only numbers', () => {
        const inputArray = [1, 2, 3];
        expect(validator.isAllNumbers(inputArray)).to.be.equal(true);
    });

    it('should return true when array is empty', () => {
        const inputArray = [];
        expect(validator.isAllNumbers(inputArray)).to.be.equal(true);
    });

    it('should return false when does not array contain only numbers', () => {
        const inputArray = [1,"2",4];
        expect(validator.isAllNumbers(inputArray)).to.be.equal(false);
    });

    it('should throw an error when it is not array', () => {
        const inputArray = '1, 2, 3';
        expect( () => {
            validator.isAllNumbers(inputArray);
        }).to.throw(`[1, 2, 3] is not an array`)
    });

    
})
