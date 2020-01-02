var totalBill = []
function tipCalculator(bill) {
	var tip;
	if (bill < 50) {
		tip = bill * 0.2;
	}else if (bill > 50 && bill < 200) {
		tip = bill * 0.15;
	} else {
		tip = bill * 0.10;
	}
	return tip;
}
 
var tips =[tipCalculator(124), tipCalculator(48) tipCalculator(268)];

totalBill[0] = 124 + tipCalculator(124);
totalBill[1] = 48 + tipCalculator(48);
totalBill[2] = 268 + tipCalculator(268);

console.log(tips,totalBill);