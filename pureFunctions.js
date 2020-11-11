async function getAccountBalance(user) {
    return new Promise(r => setTimeout(() => {
        r(user.accountBalance);
    }, Math.floor(Math.random()*100)))
};

//Reducer (accumulate, current)
async function setAccountBalance(user, value) {
    return new Promise(r => setTimeout(() => {
        user.accountBalance = value;
        r(user);
    }, Math.floor(Math.random()*100)))
};

async function increment(value, incr) { // memoize
    return new Promise(r => setTimeout(() => {
        r(value + incr);
    }, Math.floor(Math.random()*100)))
};

async function add$50(user) {
    var balance, newBalance;
    balance = await getAccountBalance(user);
    newBalance = await increment(balance, 50);
    await setAccountBalance(user, newBalance);
    return user;
};

// Pure Function:
// No accede (R/W) a entorno
// Siempre que se llame con los mismos parametros, retornara los mismos resultados
async function add$150(user) {
    user = await add$50(user);
    user = await add$50(user);
    user = await add$50(user);
    // logger.log('$' + await getAccountBalance(user));
    return user;
};


let user = {accountBalance: 0};

for (let index = 0; index < 100; index++) {
    add$150({...user}).then(console.log);
}

console.log(user); // 0