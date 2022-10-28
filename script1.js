//withdraw
//deposit
// Total amount

// for each,map, filter, find ,find index, reduce,for in

// for (let i = 0; i < transaction.length; i++) {
//   console.log(transaction[i]);
// }

// for (const trans in transaction) {
//   console.log(trans);
// }

//ForEach - > Higher order function
// function names() {
//   console.log(name);
// }
// names(); // Normal function

// const nam = function(){
//   // code
// }
// nam() // Function expression

// const namw = (data)=>{
//   // code
// }
// namw() // Arrow function
const transaction = [100, -50, 220, 220, 220 - 29, 94, 220];
//For Each
transaction.forEach((data, index, entire) => {
  console.log(data, index, entire);
});

//Map => Processing array
const mapData = transaction.map((data) => {
  return data + 10;
});
console.log(mapData);
console.log(transaction);

//filter //Return array

const deposit = transaction.filter((data) => {
  return data > 0;
});
console.log(deposit);

//find; // return single value

const single = transaction.find((data) => {
  return data > 200;
});
console.log(single);

//Reduce
const totalAmount = transaction.reduce((acc, data) => {
  return acc + data;
}, 0);
console.log(totalAmount);

// let totaValue = 0;
// totaValue  += data;
