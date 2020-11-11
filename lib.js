function fn1(paramStr) {
  return new Promise((resolve, reject) => 
    setTimeout(()=>resolve(paramStr.toUpperCase()), 100));
}
function fn1Prime(paramStr) {
  return new Promise(resolve => {
    return setTimeout(()=>resolve(paramStr.toUpperCase()), 100);
  })
}
function fn2(paramStr) {
  return new Promise(resolve => resolve(paramStr.toUpperCase()));
}

module.exports = {
  fn1,
  fn2
};