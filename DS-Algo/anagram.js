/* given two strings, write  function to determine if the second string is an anagram of the first.
    An anagram is a word, phrase, or name formed by rearranging the letter of another, such as cinema formed by iceman.
*/
function anagram(str1, str2) {
    if(str1. length !== str2.length) {
        return false
    }
    let frequecyCounter1 = {};
    let frequecyCounter2 = {};
    for(let char of str1){
        frequecyCounter1[char] = (frequecyCounter1[char] || 0) +1;
    }
    for(let char of str2){
        frequecyCounter2[char] = (frequecyCounter2[char] || 0) +1;
    }
    console.log(frequecyCounter1);
    console.log(frequecyCounter2);
    for(let key in frequecyCounter1) {
        if(!(key in frequecyCounter2)){
            return false
        }
    }
    return true;
}

console.log(anagram('anagram', 'nagarhm'));