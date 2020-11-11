function fnXPromise(timeoutTime = 1000) {
  return new Promise(function(_callback/* , _reject */){
    setTimeout(() => {
      _callback(`LE PROMISE in ${timeoutTime}`);
    }, timeoutTime);
  })
}

async function run1() {
  let elParametroDelCallback;
  try {
    constelParametroDelCallback = await fnXPromise();
  } catch(err) {
    console.log('Entre en el Catch')
  } finally {
    console.log('Esto siempre se va a ejecutar');
  }
  console.log('Async Await', elParametroDelCallback);
}

function run2() {
  fnXPromise()
    // .then(() => {throw new Error('algun error')})
    .then(() => Promise.reject('algun error'))
    .then((elParametroDelCallback) => console.log('Promise', elParametroDelCallback))
    .catch(() => console.log('Entre en el Catch'))
    .finally(() => console.log('Esto siempre se va a ejecutar'))
}


run2();