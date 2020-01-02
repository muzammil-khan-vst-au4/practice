var johnTrip = {
	bills: [124,48,268,180,42],
	tips: [],
	totalBills: [],
	calcTip: function(){
		for (var i = 0; i < this.bills.length; i++) {
			if(this.bills[i] < 50) {
				this.tips[i] = this.bills[i] * 0.2;
			}else if (this.bills[i] > 50 && this.bills[i] < 200) {
				this.tips[i] = this.bills[i] * 0.15;
			} else {
				this.tips[i] = this.bills[i] * 0.10;
			}
		}
	},
	calcBill: function(){
		for (var i = 0; i < this.bills.length; i++) {
			this.totalBills[i] = this.bills[i] + this.tips[i];
		}
	}
};
johnTrip.calcTip();
johnTrip.calcBill();
console.log(johnTrip.tips);
console.log(johnTrip.totalBills);

var markTrip = {
	bills: [77,375,110,45],
	tips: [],
	totalBills: [],
	calcTip: function(){
		for (var i = 0; i < this.bills.length; i++) {
			if(this.bills[i] < 100) {
				this.tips[i] = this.bills[i] * 0.2;
			}else if (this.bills[i] > 100 && this.bills[i] < 300) {
				this.tips[i] = this.bills[i] * 0.10;
			} else {
				this.tips[i] = this.bills[i] * 0.25;
			}
		}
	},
	calcBill: function(){
		for (var i = 0; i < this.bills.length; i++) {
			this.totalBills[i] = this.bills[i] + this.tips[i];
		}
	}
};
markTrip.calcTip();
markTrip.calcBill();
console.log(markTrip.tips);
console.log(markTrip.totalBills);

function calcAvgTips(tips) {
	var sum = 0;
	for (var i = 0; i < tips.length; i++) {
		sum = sum + tips[i];
	}
	var avg = sum/tips.length;
	return avg;
}
johnAvgTip = calcAvgTips(johnTrip.tips);
markAvgTip = calcAvgTips(markTrip.tips);
console.log(johnAvgTip);
console.log(markAvgTip);

if (johnAvgTip > markAvgTip) {
	console.log("John's family paid the highest tips on average " + johnAvgTip);
} else {
		console.log("Mark's family paid the highest tips on average " + markAvgTip);
}