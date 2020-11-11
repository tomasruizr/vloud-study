function fnX (_callback) {
  setTimeout(() => {
    _callback('Este es el parametro que le paso al callback', 'parametro 2');
  }, 1000);
}
function fnY (_callback) {
  _callback('Este es el parametro que le paso al callback', 'parametro 2');
}

// fnX((resultado) => console.log(resultado));
// fnX(function callback(elParametroDelCallback, param2) {
//   console.log(elParametroDelCallback, param2);
// });
// fnY(function callback(elParametroDelCallback, param2) {
//   console.log(elParametroDelCallback, param2);
// });

function fnXPromise(timeoutTime = 1000) {
  return new Promise(function(_callback/* , _reject */){
    setTimeout(() => {
      _callback(`LE PROMISE in ${timeoutTime}`);
    }, timeoutTime);
  })
}

// fnXPromise().then(console.log);

fnXPromise()
  .then(function callback(elParametroDelCallback) {
    console.log(elParametroDelCallback);
  })

async function run1() {
  try {
    const elParametroDelCallback = await fnXPromise();
  } catch(err) {
    console.log('Entre en el Catch')
  } finally {
    console.log('Esto siempre se va a ejecutar');
  }
  console.log('Async Await', elParametroDelCallback);
}

run1();

// PROMISE en Series
console.time('serie');
Promise.resolve()
  .then(() => fnXPromise(300).then(console.log))// Leer de Base de datos
  .then(() => fnXPromise(200).then(console.log))// Consumir un endpoint
  .then(() => fnXPromise(100).then(console.log))// Ubicar los satelites en posicion
  .then(() => fnXPromise(400).then(console.log))// Quemar un dvd
  .then(() => fnXPromise(700).then(console.log))// hacer una pizza
  .then(() => console.log('listo Del Serie'))
  .then(() => console.timeEnd('serie'))


// PROMISE ALL // Monads
console.time('parallel')
Promise.all([
  // fnXPromise(300).then(console.log)),// Leer de Base de datos
  fnXPromise(300).then(x=> { console.log('', x); return x; }),// Leer de Base de datos
  fnXPromise(200).then(x=> { console.log('', x); return x; }),// Consumir un endpoint
  fnXPromise(100).then(x=> { console.log('', x); return x; }),// Ubicar los satelites en posicion
  fnXPromise(400).then(x=> { console.log('', x); return x; }),// Quemar un dvd
  fnXPromise(700).then(x=> { console.log('', x); return x; }) // hacer una pizza
])
  .then((respuestas) => {console.timeEnd('parallel'); return respuestas})
  .then(([,,c,d]) => console.log('listo', c,d))


