const msftData = [190.15, 194.21, 191.07, 190.44, 200.15];

// Calculate the sum of all elements
const sum = msftData[0] + msftData[1] + msftData[2] + msftData[3] + msftData[4];

// Calculate the average by dividing the sum by the length (5 days) of the array
const average = sum / 5;

// Output round of to 3 decimals
console.log(average.toFixed(3));

