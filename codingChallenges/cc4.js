var john = {
	name : 'John',
	mass : 65,
	height : 1.7 ,
	calcBMI : function() {
		this.bmi= this.mass/(this.height * this.height);
	}
};

var mark = {
	name : 'Mark' ,
	mass : 72,
	height : 1.81,
	calcBMI : function() {
		return this.mass/(this.height * this.height);
	}
};
john.calcBMI();
mark.bmi = mark.calcBMI();
console.log(john, mark);

if(john.bmi > mark.bmi) {
	console.log(john.name + ' has higher BMI ' + john.bmi);
}else if (mark.bmi > john.bmi) {
	console.log(mark.name + ' has higher BMI ' + mark.bmi);
}else {
	console.log('Both john and mark have same BMI');
}
