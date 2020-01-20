/* Impletement a function called countUniqueValues which accepts a sorted array, and counts the unique values in the array. Using multiple pointer pattern.*/

function countUniqueValues(array) {
    let i = 0;
    for (let j = 1; j < array.length; j++) {
        if(array[i] != array[j]) {
            i++;
            array[i] = array[j]
        }
    }
    return i+1;
}

console.log(countUniqueValues([1,1,1,2,2,3]))