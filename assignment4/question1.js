const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// Find the highest stock price
const highestPrice = Math.max(...amdPrices);

// Output: AMD 52-week high is 102.21
console.log(`AMD 52-week high is ${highestPrice}`);