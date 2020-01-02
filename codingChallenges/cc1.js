var johnHeight = 1.7 , johnMass = 70;
var markHeight = 1.6, markMass = 75;
var johnBMI = johnMass/(johnHeight*johnHeight);
var markBMI = markMass/(markHeight*markHeight);
console.log(johnBMI, markBMI);
var isGreater = markBMI < johnBMI
console.log("Is Mark's BMI higher than John? " + isGreater);