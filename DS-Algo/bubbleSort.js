function bubbleSort(array) {
    for (let i = 1; i < array.length; i++) {
        for (let j = 0; j < array.length-i; j++) {
            //console.log(array, array[j], array[j+1])
            if(array[j] > array[j+1]){
                [array[j], array[j+1]] = [array[j+1], array[j]];
            }
        }
    }
    return array;
}
console.log(bubbleSort([5,3,4,1,2]))
