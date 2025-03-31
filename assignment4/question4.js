const msftData = [
	[190.15, 196.21, 191.07, 194.44],
	[193.61, 195.89, 190.12, 193.40]
];

/* 
- index 0 - Open
- index 1 - High
- index 2 - Low
- index 3 - Close
*/

// Declare total sum and access the closing price (index 3)
let totalSum = 0;
for (let i = 0; i < msftData.length; i++) {
	totalSum += msftData[i][3];
}

// Declare and find the average closing price
const averageClosingPrice = totalSum / msftData.length;

// Output: Average closing price of MSFT is 193.92
console.log(`Average closing price of MSFT is ${averageClosingPrice.toFixed(2)}`);