// Write a function called 'divide' that takes two parameters: a numerator and a denominator.
// Your function should return the result of numerator / denominator.

// However, if the denominator is zero you should throw the error, "Attempted to divide by zero."

// Code your divide function here:
function divide(num, deno){
    if(deno === 0){
        console.log('conditionhas been met');
        throw Error('You cannot divide by zero!');
    }else{
    return num/deno;
  }
}
