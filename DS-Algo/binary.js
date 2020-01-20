function binarySearch(array, num) {
    let low = 0;
    let high = array.length -1
    
    //console.log(low, high, mid)
    while(low <= high){
        let mid = Math.floor((low+high)/2)
        console.log(low, mid, high);
        if(array[mid] == num) {
            return mid
        }
        if(num > array[mid]){
            low = mid +1
        }
        if(num < array[mid]) {
            high = mid -1
        }
        mid = Math.floor((low+high)/2)
    }
    
    return -1
}
console.log(binarySearch([4,8,9,10,47], 47))