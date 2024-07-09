//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

function findMinValue(arr){
    let min = arr[0];
    for (i = 0; i < arr.length; i++){
      if (arr[i] < min){
        min = arr[i];
      }
    }
    return min;
  }
//Sort each array in ascending order.
function ascendingSort(arr){
  let finalSort = [];
  let smallestInt=0;
  let minIndex = 0;
  let arrLength = arr.length;

    for(let i = 0; i < arrLength; i++){
      smallestInt = findMinValue(arr);
      minIndex = arr.indexOf(smallestInt);
      //console.log("this is old array: " + arr.indexOf(minIndex));
      finalSort.push(arr[minIndex]);
      arr.splice(minIndex,1);
      
      //console.log(smallestInt);
    }
    //console.log("this is the finalSort: " + finalSort);
    //console.log(arr);

    
    return finalSort;
}
//Sort each array in descending order.
function descendingSort(arr){
  let finalSort = [];
  let smallestInt=0;
  let minIndex = 0;
  let arrLength = arr.length;

    for(let i = 0; i < arrLength; i++){
      smallestInt = findMinValue(arr);
      minIndex = arr.indexOf(smallestInt);
      //console.log("this is old array: " + arr.indexOf(minIndex));
      finalSort.unshift(arr[minIndex]);
      arr.splice(minIndex,1);
      
      //console.log(smallestInt);
    }
    //console.log("this is the finalSort: " + finalSort);
    //console.log(arr);

    
    return finalSort;
}
console.log(descendingSort(nums2));

//console.log(ascendingSort(nums3));