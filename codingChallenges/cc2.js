var teamJohnAverage = (89+120+103)/3;
var teamMikeAverage = (116+94+123)/3;

if (teamJohnAverage > teamMikeAverage ) {
	console.log("John's team wins "+ teamJohnAverage );
} else if(teamJohnAverage == teamMikeAverage) {
	console.log("It is a draw "+ teamMikeAverage+' '+ teamJohnAverage);
}
else {
	console.log("Mike's team wins "+teamMikeAverage );
}