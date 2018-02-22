import 'mocha';
import chai from 'chai';

import _l from './build/leencoln.js'

let expect = chai.expect;

mocha.setup({
    ui: 'bdd',
    reporter: 'html'
});

describe('#leencoln', function() {
    it('add()', function() {
        expect(_l.add(1,2)).to.eql(10);
    }),
    it('add2', function() {
        expect(_l.add2(3,4)).to.eql(16);
    })
})

mocha.checkLeaks();
mocha.run();