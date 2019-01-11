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

// var SAMPLE_JSON_3 = {
//   'JMON': {
//     'name': {
//       'people': 'bibek',
//     },
//     'author': 'Bibek',
//     'url': 'https://github.com/bibekluitel/JMON',
//   },
// };

// var SAMPLE_JSON_STIRNGIFIED = '{"JMON":{"name":"JMON","author":"Bibek",'
// + '"url":"https://github.com/bibekluitel/JMON"}}';

describe('VCOnstructor Test', function() {
  it('Compare Constructor Object', function() {
    var jmon = new JMON(SAMPLE_JSON);
    expect(typeof (jmon.set)).to.be.equal('function');
    expect(typeof (jmon.get)).to.be.equal('function');
    expect(typeof (jmon.commit)).to.be.equal('function');
    expect(typeof (jmon.push)).to.be.equal('function');
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
    expect(jmon.isUpdated).to.true;
    expect(jmon.get('JMON').data).to.deep.equal(SAMPLE_JSON_1);

    result = jmon.set('JMON.no_author', 'arshad');
    expect(result).to.false;
  });

  // it('validates set object value', function() {
  //   var jmon = new JMON(SAMPLE_JSON);
  //   expect(jmon.get('JMON').data).to.deep.equal(SAMPLE_JSON.JMON);

  //   var result = jmon.get('JMON').set('name', { 'people': 'Arshad'});
  //   expect(result).to.true;
  //   expect(jmon.isUpdated).to.true;
  //   console.log(result);
  // expect(jmon.get('JMON').data).to.deep.equal(SAMPLE_JSON_1);

  // result = jmon.set('JMON.no_author', 'arshad');
  // expect(result).to.false;
  // });
});

// describe('Verifies commit functionality', function(){
//   it('Commits the current changes', function() {
//     var jmon = new JMON(SAMPLE_JSON);
//     var result = jmon.set('JMON.author', 'arshad');
//     expect(result).to.true;
//     expect(jmon.initialData).to.deep.equal(SAMPLE_JSON);
//     jmon.commit();
//     expect(jmon.initialData).to.deep.equal(SAMPLE_JSON_3);
//   });
// });

// // Add test related set/get operations
// describe('Verifies the set and get operations', function() {
//   it('Prints Set Value', function() {
//     var jmon = new JMON(SAMPLE_JSON);
//     jmon.set('JMON.name.people', 'bibek');
//     expect(jmon.data).to.deep.equal(SAMPLE_JSON_3);
//   });
// });

// describe('Verifies commit functionality', function(){
//   it('Commits the current changes', function() {
//     var jmon = new JMON(SAMPLE_JSON);
//     jmon.set('JMON.name.people', 'bibek');
//     jmon.commit();
//     expect(jmon.initialData).to.deep.equal(SAMPLE_JSON_3);
//   });
// });

// Add test related to printing and formatting operations
// describe('Verify printing related operations', () => {
//   it('should match the returned stringified response with defined stringified value', () => {
//     var jmon = new JMON(SAMPLE_JSON);
//     var response = jmon.stringify();
//     expect(response).to.be.a('string');
//     expect(response).to.equal(SAMPLE_JSON_STIRNGIFIED);
//   });
// });
