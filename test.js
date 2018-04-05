import 'mocha';
import chai from 'chai';

import _l from './build/leencoln.js'

let expect = chai.expect;

mocha.setup({
    ui: 'bdd',
    reporter: 'html'
});

describe('argument type "number"', function() {

    describe('nDecimalPoint', function() {
        it("should assign decimal point number", function() {
            expect(_l.nDecimalPoint("ceil")(100.34567)(3)).to.eql(100.346);
            expect(_l.nDecimalPoint("round")(100.34567)(3)).to.eql(100.346);
            expect(_l.nDecimalPoint("floor")(100.34567)(3)).to.eql(100.345);
            expect(_l.nDecimalPoint("trunc")(100.34567)(3)).to.eql(100.345);
            expect(_l.nDecimalPoint("rount")(100.34567)(3)).to.eql("It is not correct method, Please enter the correct method([ceil, round, floor, trunc])");
        })
    });
});

describe('argument type "string"', function() {
    
    describe('camelCase', function() {
        it("when special-character(-, _, ' ') exist, next character will be capitalized", function() {
            expect(_l.camelCase('abc_def-ghi jkl')).to.eql('AbcDefGhiJkl');
            expect(_l.camelCase('_abc def--ghi   jkl---')).to.eql('AbcDefGhiJkl');
        });
    });

    describe('capitalize', function() {
        it("first character will be capitalized, special character will be deleted", function() {
            expect(_l.capitalize('abc_def-ghi jkl')).to.eql('Abcdefghijkl');
        });

        it("rest character except first chracter will be lowercased", function() {
            expect(_l.capitalize('abc_def-Ghi JKL')).to.eql('Abcdefghijkl');
        })
    });

    describe('kebabCase', function() {
        it('all characters contain first character will be lowercased', function() {
            expect(_l.kebabCase('Abc_def-Ghi JKL')).to.eql('Abc-def-ghi-jkl');
        })
    });

    describe('replaceAll', function() {
        it('original characters replaced replacement character', function() {
            expect(_l.replaceAll('a')('d')('ababababab')).to.eql('dbdbdbdbdb');
        })
    });

});

describe('argument type "array"', function() {
    
    describe('compact', function() {
        it('falsey values will be deleted', function() {
            expect(_l.compact([0, 1, -1, '', 'a', true, false, null, undefined, [], [1,2,3], {}, {z:100}])).to.eql([1, -1, 'a', true, [], [1,2,3], {}, {z:100}]);
        });
    });

    describe('every', function() {
        it('if only one value is not satified, return false', function() {
            expect(_l.every([1,3,5,8,11], ((num) => num % 2 === 1 ? true : false))).to.eql(false);
            expect(_l.every([1,3,5,9,11], ((num) => num % 2 === 1 ? true : false))).to.eql(true);
        })
    })

    describe('reduceReverse', function() {
        it('run reduce received callback and reversed collection', function() {
            expect(_l.reduceReverse([1000, 100, 1], (num1, num2) => num2 / num1)).to.eql(10);
            expect(_l.reduceReverse([1000, 100, 1], (num1, num2) => num2 / num1, 0.1)).to.eql(100);
        });
    });

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

});

describe('argument type "object"', function() {
    
    describe('getKeyByValue', function() {
        it('should return key by value', function() {
            expect(_l.getKeyByValue(3, {a: 1, b: 2, c: 3})).to.eql(['c']);
        });
        it('can return multiple key', function() {
            expect(_l.getKeyByValue(3, {a: 1, b:2, c: 3, d: 3})).to.eql(['c', 'd']);
        })
    });

    describe('values', function() {
        it('should return values as array', function() {
            expect(_l.values({a: 1, b: 2, c: 3})).to.eql([1, 2, 3]);
        })
    })
});

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
            expect(_l.deepEqual('abc')('abc')).to.eql(true);
            expect(_l.deepEqual(123)(123)).to.eql(true)
        });

        it('should return true when received complicated value', function() {
            expect(_l.deepEqual([1, 'a', arr1, obj1, true, false, undefined, null])([1, 'a', arr1, obj1, true, false, undefined, null])).to.eql(true);
        });

        it('exception handling // JSON.stringify(null) === JSON.stringify(NaN) -> true', function() {
            expect(JSON.stringify(null)).to.not.eql(JSON.stringify(NaN));
            expect(JSON.stringify(null)).to.not.eql(JSON.stringify(Infinity));
        })
    });

    describe('howOldAmI', function() {
        let gentleman = 900322;
        let oldestBoy = 190430;

        it('should get american age and korean age', function() {
            expect(_l.howOldAmI('korea')(gentleman)).to.eql(29);
            expect(_l.howOldAmI('america')(gentleman)).to.eql(28);
        });

        it('maxium age is 100', function() {
            expect(_l.howOldAmI('korea')(oldestBoy)).to.eql(100);
            expect(_l.howOldAmI('america')(oldestBoy)).to.eql(99);
        })
    })
});


mocha.checkLeaks();
mocha.run();