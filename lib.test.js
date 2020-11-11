const lib = require('./lib.js')
const {assert} = require('chai');

describe('mochaStudy', function() {
  describe('lib', function() {
    describe('fn1', function() {
      it('transforms the input to uppercase', () => {
        lib.fn1('hola pana')
          .then(res => {
            console.log('entre')
            assert.equal('HOLA PANA asdfasdfadf', res)
          }, error => console.error(error))
        console.log('termine!');
      });
    });
  });
});