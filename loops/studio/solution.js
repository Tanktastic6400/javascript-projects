const input = require('readline-sync');

// Part A: #1 Populate these arrays

let protein = ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans'];
let grains = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
let veggies = ['peas', 'green beans', 'kale', 'edamame', 'broccoli', 'asparagus'];
let beverages = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
let desserts = ['apple', 'banana', 'more kale', 'ice cream', 'chocolate', 'kiwi'];


function mealAssembly(protein, grains, veggies, beverages, desserts, numMeals) {
  let pantry = [protein, grains, veggies, beverages, desserts];
  let meals = [];
  let items = [];
  
  /// Part A #2: Write a ``for`` loop inside this function
  /// Code your solution for part A #2 below this comment (and above the return statement) ... ///
  
  for(let i = 0; i < numMeals; i++){
    //reset items
    items = [];
    
    for(let j = 0; j < pantry.length; j++){      
      items.push(pantry[j][i]);
      
    }//end of nested for loop
    
    meals.push(items.concat());
  }//end of first for loop
  

  return meals;
}// end of function mealAssembly


function askForNumber() {
  numMeals = input.question("How many meals would you like to make?");
  let validInput = false;
  let num;

 // input.question("How many meals would you like to create? ");
  while(!validInput){
    if(numMeals > 0 && numMeals <= 6){
      validInput = true;
    }else{
      input.question("Please input something between 1 and 6 meals: ");
    }
  }
  /// CODE YOUR SOLUTION TO PART B here ///

  return numMeals;
}


function generatePassword(string1, string2) {
  let code = '';
  let tmpArr = [];
  for(let i = 0; i < string1.length + string2.length; i++){
    tmpArr.push(string1[i]);
    tmpArr.push(string2[i]);
  }
  /// Code your Bonus Mission Solution here ///
  code = tmpArr.join("");
  return code;
}

function runProgram() {
  
  /// TEST PART A #2 HERE ///
  /// UNCOMMENT the two lines of code below that invoke the mealAssembly function (starting with 'let meals =') and print the result ///
  /// Change the final input variable (aka numMeals) here to ensure your solution makes the right number of meals ///
  /// We've started with the number 2 for now. Does your solution still work if you change this value? ///
  
   let meals = mealAssembly(protein, grains, veggies, beverages, desserts, 4);
   console.log(meals)
  

  /// TEST PART B HERE ///
  /// UNCOMMENT the next two lines to test your ``askForNumber`` solution ///
  /// Tip - don't test this part until you're happy with your solution to part A #2 ///
  
   let mealsForX = mealAssembly(protein, grains, veggies, beverages, desserts, askForNumber());
   console.log(mealsForX);

    /// TEST PART C HERE ///
  /// UNCOMMENT the remaining commented lines and change the password1 and password2 strings to ensure your code is doing its job ///

   let password1 = 'LoOt';
   let password2 = 'oku!';
   console.log("Time to run the password generator so we can update the menu tomorrow.")
   console.log(`The new password is: ${generatePassword(password1, password2)}`);
}

module.exports = {
  protein: protein,
  grains: grains,
  veggies: veggies,
  beverages: beverages,
  desserts: desserts,
  mealAssembly: mealAssembly,
  askForNumber: askForNumber,
  generatePassword: generatePassword,
  runProgram: runProgram
};
