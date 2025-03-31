const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82]

/*
let data = ()
for price in data:
    if price < 3:
    data.push(price)
*/

// Sort prices in ascending order and return the first three lowest prices
function threeLowestPrices(prices) {
    prices.sort((a, b) => a - b);
    return prices.slice(0, 3);
}

// Find the 3 lowest average prices
const lowestAverageThreePrices = threeLowestPrices(amdPrices);

// Output: The three lowest prices are 79.82, 87.12, and 88.15
console.log(`The three lowest prices are ${lowestAverageThreePrices.join(", ")}`);