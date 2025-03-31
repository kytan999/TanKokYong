const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// Declare totalSum & aboveSMA
let totalSum = 0, aboveSMA = 0;

// Loop through array and calculate the total sum 
for (let price of amdPrices) {
    totalSum += price;
}

// Calculate the average (sma) 
const sma = totalSum / amdPrices.length;

// Find the number of days above sma
for (let price of amdPrices) {
    if (price > sma) aboveSMA++;
}

// Output: Number of days AMD was above the 7-day SMA is: 2
console.log(`Number of days AMD was above the 7-day SMA is: ${aboveSMA}`);
