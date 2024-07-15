function randomFromArray(arr){
  //Your code here to select a random element from the array passed to the function.
  let randomNum = Math.floor(Math.random() * arr.length);

  return arr[randomNum];

}

//TODO: Export the randomFromArray function.
module.exports = randomFromArray;