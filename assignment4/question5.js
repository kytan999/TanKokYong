const disneyData = [
	{
		open: "120.54",
		high: "122.56",
		low: "120.54",
		close: "121.09"
	},
	{
		open: "123.15",
		high: "127.76",
		low: "123.02",
		close: "124.92"
	}
];

// Declare total sum
let totalSum = 0;
for (let i = 0; i < disneyData.length; i++) {
	totalSum += parseFloat(disneyData[i].close);
}

// Declare and find the average closing price
const averageClosingPrice = Math.round((totalSum / disneyData.length) * 100) / 100;

console.log(`Average closing price of Disney is ${averageClosingPrice.toFixed(2)}`);
