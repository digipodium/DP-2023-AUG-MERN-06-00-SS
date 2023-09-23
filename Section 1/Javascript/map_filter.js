const nums = [34, 8, 9, 35, 36, 29, 61];

const evens = nums.filter( (n) => { return n%2===0 } )

console.log(evens);

const prices = [345, 8726, 238, 20, 1002, 400, 799, 1400];
// WAP to filter prices between 500 to 2000.

const filteredPrices = prices.filter( p => p>=500 && p<=2000  );

console.log(filteredPrices);