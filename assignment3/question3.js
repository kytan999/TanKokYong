const disneyData = {
	open: "120.54",
	high: "122.56",
	low: "120.54",
	close: "121.09"
};

// Convert string to number
const open = parseFloat(disneyData.open);
const high = parseFloat(disneyData.high);
const low = parseFloat(disneyData.low);
const close = parseFloat(disneyData.close);

// Based on the formula: open - high + low - close
const result = open - high + low - close;

// Output round of to 2 decimals
console.log(result.toFixed(2));

