function merge(arr1, arr2) {
    let result = [];
    let i= 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length) {
        if(arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++
        } else if(arr2[j] < arr1[i]) {
            result.push(arr2[j])
            j++
        }
        else if(arr2[j] === arr1[i]) {
            result.push(arr2[j]);
            result.push(arr1[i])
            i++, j++
        }
    }
    while(i< arr1.length) {
        result.push(arr1[i])
        i++
    }
    while(j< arr2.length) {
        result.push(arr2[j])
        j++
    }
    return result
}

function mergeSort(array) {
    if(array.length <= 1){
        return array;
    }
    let left = mergeSort(array.slice(0,Math.floor(array.length/2)))
    let right = mergeSort(array.slice(Math.floor(array.length/2)))

   // mergeSort(left)
   // mergeSort(right)
    return merge(left, right) 
}

console.log(mergeSort([2,99,100,49,20]))