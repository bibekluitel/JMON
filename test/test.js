var assert = require('assert');

const JMON  = require('../index')

describe('Testing Basic Functions', function () {
    it('Prints Set Value', function () {
        const d = new JMON({'test': 1});
        const newObj = {'test': 2};
        d.set(newObj);
        assert.deepEqual(d.data, newObj);
    })
})