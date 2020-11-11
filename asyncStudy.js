const asyncFn2 = (time, mensaje) => new Promise(r => setTimeout(()=>r(mensaje), time));

const SyncUserSalaDatasRequest = async (x, mensaje, time)=>{
  console.log('Antes', mensaje, x);
  const result = await asyncFn2(time, mensaje);
  console.log('Despues', mensaje, x);
  x.name = result;
  console.log('final', x);
};

async function run1(x, label) {
  SyncUserSalaDatasRequest(x, 'modificado Run1: ' + label, 100);
}
async function run2(x, label) {
  SyncUserSalaDatasRequest(x, 'modificado Run2: ' + label, 200);
}

async function exec(x) {
  run1(x, 'exec 1');
  x.name = 'modificado afuera exec 1';
  run2(x, 'exec 1');
}
async function exec2(x) {
  run1(x, 'exec 2');
  x.name = 'modificado afuera exec 2';
  run2(x, 'exec 2');
}
const x = {name:'tomas'};
exec(x);
exec2(x);
