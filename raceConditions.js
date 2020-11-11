var accountBalance = 0;

async function getAccountBalance() {
    // Suppose this was asynchronously from a database or something
    return new Promise(r => setTimeout(() => {
      r(accountBalance);
  }, Math.floor(Math.random()*100)))
};

async function setAccountBalance(value) {
    // Suppose this was asynchronously from a database or something
    return new Promise(r => setTimeout(() => {
      accountBalance = value;
      r();
  }, Math.floor(Math.random()*100)))
};

async function increment(value, incr) {
    return new Promise(r => setTimeout(() => {
      r(value + incr);
  }, Math.floor(Math.random()*100)))
};

async function add$50() {
    var balance, newBalance;
    balance = await getAccountBalance();
    newBalance = await increment(balance, 50);
    await setAccountBalance(newBalance);
};

async function add$150() {
    var transaction1, transaction2;
    transaction1 = add$50();
    transaction2 = add$50();
    await transaction1;
    await transaction2;
    console.log('$' + await getAccountBalance());
    // Can print either $50 or $100
    // which it prints is dependent on what order
    // things arrived on the message queue, for this very simple
    // dummy implementation it actually prints $50 because
    // all values are added to the message queue immediately
    // so it actually alternates between the two async functions
};

add$150();

for (let index = 0; index < 100; index++) {
  add$150();
}