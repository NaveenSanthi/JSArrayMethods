const transaction = [100, -50, 220, -29, 94];
console.log(transaction);

//Push,pop,shift, unshift

//Last index add data
transaction.push(20);
console.log(transaction);

//last index delete data
transaction.pop();
console.log(transaction);

//first index unshift
transaction.unshift(720);
console.log(transaction);

transaction.shift();
console.log(transaction);

transaction.pop();
console.log(transaction);

console.log(transaction.indexOf(-50));

console.log(transaction.includes(-500));
