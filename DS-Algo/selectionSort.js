function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let min = i;
        for (let j = i+1; j < array.length; j++) {
            if(array[min] > array[j]){
                min = j
            }
        }
        if(i != min) {
            [array[min], array[i]] = [array[i], array[min]]
        }
    }
    return array; 
}

console.log(selectionSort([34,22,10,19,17]))