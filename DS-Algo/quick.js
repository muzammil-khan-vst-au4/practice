function pivot(array, start=0, end = array.length-1) {
    let pivot = array[start]
    let j = start;
    for (let i = start +1; i <= end; i++) {
        if(array[i] < pivot) {
            j++; 
            [array[i], array[j]] = [array[j], array[i]]
        }
    }
    [array[j], array[start]] = [array[start], array[j]]
    console.log(array)
    return j
}
function quickSort(array, left = 0,  right= array.length-1) {
    if(left < right){
        let index = pivot(array, left, right)
        quickSort(array, left, index -1)
        quickSort(array,index+1,right)
    }
    return array
}
console.log(quickSort([4,6,9,1,2,5,3]))