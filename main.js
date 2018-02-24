import 'mocha';
import chai from 'chai';

import _l from './build/leencoln.js'

let expect = chai.expect;

mocha.setup({
    ui: 'bdd',
    reporter: 'html'
});

// describe('argument type "number"');

// describe('argument type "string"');

describe('Argument type "array"', function() {
    
    describe('shuffle', function() {

        let deck = ["a", "b", "c", "d"];
        let shuffled_deck = _l.shuffle(deck);
        let sorted_shuffled_deck = shuffled_deck.sort();

        it('should not modify argument', function() {
            expect(shuffled_deck).to.not.equal(deck);
            expect(deck).to.eql(["a", "b", "c", "d"]);
        });

        it('should not have other element as argument', function() {
            expect(shuffled_deck).to.eql(["a", "b", "c", "d"]);
        });

        it('should not return equal order deck', function() {
            expect(shuffled_deck).to.eql(["a", "b", "c", "d"]);
        });

    });

    // describe('')
});

// describe('argument type "object"');

// describe('argument type "function"');

describe('etc..', function() {
    
    describe('deepEqual', function() {

        let arr1 = [1, 2, 3];
        let arr2 = [1, 2, 3];
        let obj1 = {a: 1, b: 2, c: 3};
        let obj2 = {a: 1, b: 2, c: 3};

        it('[1,2,3] === [1,2,3] // false', function() {
            expect(arr1).to.eql(arr2);
            expect(obj1).to.eql(obj2);
        });

        it('should return true when received simple value', function() {
            expect('abc').to.eql('abc');
            expect(123).to.eql(123)
        });

        it('should return true when received complicated value', function() {
            expect([1, 'a', arr1, obj1, true, false, undefined, null]).to.eql([1, 'a', arr1, obj1, true, false, undefined, null]);
        });

        it('exception handling // JSON.stringify(null) === JSON.stringify(NaN) -> true', function() {
            expect(JSON.stringify(null)).to.not.eql(JSON.stringify(NaN));
            expect(JSON.stringify(null)).to.not.eql(JSON.stringify(Infinity));
        })
    });

    //describe
});


mocha.checkLeaks();
mocha.run();