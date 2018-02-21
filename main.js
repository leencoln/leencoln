import 'mocha';
import chai from 'chai';

import sum from './build/leencoln.js'

let expect = chai.expect;

mocha.setup({
    ui: 'bdd',
    reporter: 'html'
});

describe('#ModuleSum', function() {
    it('sum()', function() {
        expect(sum(1,2)).to.eql(3);
    })
})

mocha.checkLeaks();
mocha.run();