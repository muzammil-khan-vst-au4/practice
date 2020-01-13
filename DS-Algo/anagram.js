/* given two strings, write  function to determine if the second string is an anagram of the first.
    An anagram is a word, phrase, or name formed by rearranging the letter of another, such as cinema formed by iceman.
*/
function anagram(str1, str2) {
    if(str1. length !== str2.length) {
        return false
    }
    let frequecyCounter1 = {};
    for(let char of str1){
        frequecyCounter1[char] = (frequecyCounter1[char] || 0) +1;
    }
    console.log(frequecyCounter1);
    for(let char of str2) {
        console.log(char)
        if(frequecyCounter1[char]) {
            frequecyCounter1[char] -= 1 
        }else {
            return false
        }
    }
    return true;
}

console.log(anagram('anagram', 'nagaram'));