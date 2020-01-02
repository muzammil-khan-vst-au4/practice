let stack = [];
let word = "freeCodeCAmp";
let reverseWord = "";

//pushing letters in the stack
for(i=0; i< word.length; i++) {
    stack.push(word[i]);
}

//poping letters from the stack. They will get reversed
for(i=0; i< word.length; i++) {
    reverseWord += stack.pop();
}

//comparing
if(reverseWord == word) {
    console.log(`${word} is a palindrome`)
}else {
    console.log(`${word} is not a palindrome`)
}