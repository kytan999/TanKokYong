const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// Declare and find the total sum of amd prices
let totalSum = 0;
for (let i = 0; i < amdPrices.length; i++) {
    totalSum += amdPrices[i];
}

// Calculate the average (SMA) 
const sma = totalSum / amdPrices.length;

// Output: The 7-day SMA of AMD is 90.97
console.log(`The 7-day SMA of AMD is ${sma.toFixed(2)}`);
