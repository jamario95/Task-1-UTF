import { expect } from 'chai'
import { describe, beforeEach, afterEach, it } from 'mocha'
import NumbersValidator from '../../app/numbers_validators.js';

describe('isInteger', () => {
    let validator;

    beforeEach( () => {
        validator = new NumbersValidator();
    })

    afterEach(() => {
        validator= null;
    })

    it('should return true if n is an int', () => {
        expect(validator.isInteger(4)).to.be.equal(true);
    })


    it('should return false if n is not an int', () => {
        expect( () => {
            validator.isInteger('4');
        }).to.throw('[4] is not a number')
    })

})