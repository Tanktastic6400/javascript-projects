//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
let startingFuel;
let fuelStatus;
let numOfAstros;
let altitudeReached = 0;
let validAmount = false;
let userInput;
let input = require("readline-sync");



/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */
  userInput = input.question("Please enter the Starting Fuel Level: ");
  while(!validAmount){
    if(userInput >= 5000 && userInput <= 30000){
        startingFuel = userInput;
        fuelStatus = startingFuel;
        validAmount = true;
    }else{ userInput = input.question("Please enter an amount between 5000 and 30,000: ");}
    
  }
  validAmount = false;




//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
userInput = input.question("Please enter the number of astronauts on board: ");
while(!validAmount){
  if(userInput <= 7){
      numOfAstros = userInput;
      validAmount = true;
  }else{ userInput = input.question("Please kick out an astronaut, you need to have a maximum of 7: ");}
  
}
validAmount = false;
    
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.
while(fuelStatus > 0){
  fuelStatus -= numOfAstros * 100;
  altitudeReached = altitudeReached + 50;
  /*dis no work
  altitudeReached += 50;*/
}



/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
console.log(`The shuttle gained an altitude of ${altitudeReached}`);
if(altitudeReached >= 2000){
  console.log("Orbit achieved!");
}else{console.log("Failed to reach orbit.");}