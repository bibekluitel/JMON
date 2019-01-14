var expect = require('chai').expect;
var JMON = require('../index');

var SAMPLE_JSON = {
  'JMON': {
    'name': 'JMON',
    'author': 'Bibek',
    'url': 'https://github.com/bibekluitel/JMON',
  },
};

var SAMPLE_JSON_1 = {
  'name': 'JMON',
  'author': 'Arshad',
  'url': 'https://github.com/bibekluitel/JMON',
};

var TEST_JSON = {
  'people': 'Arshad',
};

describe('Constructor Test', function() {

  it('verifies JMON object is built correctly', function() {
    var jmon = new JMON(SAMPLE_JSON);

    expect(typeof (jmon.set)).to.be.equal('function');
    expect(typeof (jmon.get)).to.be.equal('function');
    expect(typeof (jmon.commit)).to.be.equal('function');
    expect(jmon.isUpdated).to.be.false;
    expect(jmon.isCreated).to.be.false;
    expect(jmon.isDeleted).to.be.false;
  });
});

describe('verifies the set and get operations', function() {

  it('validates set string value', function() {
    var jmon = new JMON(SAMPLE_JSON);
    expect(jmon.get('JMON').data).to.deep.equal(SAMPLE_JSON.JMON);

    var result = jmon.get('JMON').set('author', 'Arshad');
    expect(result).to.true;
    expect(jmon.isUpdated).to.false;
    expect(jmon.get('JMON').isUpdated).to.true;
    expect(jmon.isModified()).to.true;
    expect(jmon.get('JMON').data).to.deep.equal(SAMPLE_JSON_1);
  });

  it('validates set object value', function() {
    var jmon = new JMON(SAMPLE_JSON);

    expect(jmon.get('JMON').data).to.deep.equal(SAMPLE_JSON.JMON);

    var result = jmon.get('JMON').set('name', { 'people': 'Arshad'});

    expect(result).to.true;
    expect(jmon.isUpdated).to.false;
    expect(jmon.get('JMON').isUpdated).to.true;
    expect(jmon.get('JMON.name').isCreated).to.true;
    expect(jmon.get('JMON.name').data).to.deep.equal(TEST_JSON);
  });

  it('validates set new object value', function() {
    var jmon = new JMON(SAMPLE_JSON);

    expect(jmon.get('JMON').data).to.deep.equal(SAMPLE_JSON.JMON);

    var result = jmon.get('JMON').set('new_name', TEST_JSON);

    expect(result).to.true;
    expect(jmon.isUpdated).to.false;
    expect(jmon.get('JMON').isUpdated).to.true;
    expect(jmon.get('JMON.new_name').isCreated).to.true;
    expect(jmon.get('JMON.new_name').data).to.deep.equal(TEST_JSON);
    expect(jmon.get('JMON.name')).to.deep.equal('JMON');
  });
});


describe('Verifies commit functionality', function(){
  it('Commits the current changes', function() {

    var jmon = new JMON(SAMPLE_JSON);

    var result = jmon.set('JMON.people', 'Arshad');

    expect(result).to.true;

    expect(jmon.initialData).to.deep.equal(SAMPLE_JSON);

    jmon.commit();

    expect(jmon.initialData.JMON.people).to.deep.equal(TEST_JSON.people);

  });
});

describe('Verifies non json object initialization', function() {

  it('verifies JMON throws error if input is not a JSON Object', function() {
    expect(() => new JMON(1231)).to.throw('Only JSON and Arrays of JSON are supported');
    expect(() => new JMON('ashu')).to.throw('Only JSON and Arrays of JSON are supported');
    expect(() => new JMON(true)).to.throw('Only JSON and Arrays of JSON are supported');
  });
});
