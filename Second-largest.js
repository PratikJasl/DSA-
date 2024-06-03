function secondLargest(arr){
    let largest = 0;
    let secondLargest = 0;

    for(let i =0; i < arr.length; i++){
        if(arr[i] > largest){
            secondLargest = largest;
            largest = arr[i];
            
        }
        else if (arr[i] > secondLargest && arr[i] < largest){
            secondLargest = arr[i];
        }
    }
    return {large: largest, Second: secondLargest};
}

console.log(secondLargest([7,8,9,10]));