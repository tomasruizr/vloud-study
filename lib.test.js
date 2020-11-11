const lib = require('./lib.js')
const {assert} = require('chai');

describe('mochaStudy', function() {
  describe('lib', function() {
    describe('fn1', function() {
      it('transforms the input to uppercase Promise', done => {
        lib.fn1('hola pana')
          .then(res => {
            console.log('entre1')
            assert.equal('HOLA PANA', res)
            console.log('entre2');
            return 'hola';
          })
          .then((hola) => done())
          .catch(done)
          // .catch(err => done(err))
        console.log('termine!');
      });
      it('transforms the input to uppercase Async', async () => {
        // Problema: NO FUNCIONA
        // await llamar a CMI.Fn1 -> manda el mensaje y eventualmente responde
        // Subscribir mensaje del CMI -> recibo la respuesta
        //    Validar en Base de datos
        // FIN
        // ------------------------------------
        // Opcion: SI FUNCIONA
        // Subscribir mensaje del CMI -> recibo la respuesta
        //    Validar en Base de datos
        //    Done
        // llamar a CMI.Fn1 -> manda el mensaje y eventualmente responde
        // FIN?
        const res = await lib.fn1('hola pana')
          // .then(res => {
          //   return 'hola';
          // })
        console.log('entre1')
        assert.equal('HOLA PANA', res)
        console.log('entre2');
        console.log('termine!');
      });
    });
  });
});