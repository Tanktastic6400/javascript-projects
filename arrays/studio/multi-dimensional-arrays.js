let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";
let validInput = false;

const input = require('readline-sync');
//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
    food = food.split(",").sort();
    equipment = equipment.split(",").sort();
    pets = pets.split(",").sort();
    sleepAids = sleepAids.split(",").sort();

//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
    let cargoHold = [food, equipment, pets, sleepAids];
    //console.log(cargoHold);

//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
    let userNumber = input.question("Which cabinet would you like to access?  Please input a number between 0 and 3: ");
    let userItem = input.question("And what Item are you looking for?: ");
//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
while(!validInput){   
if(userNumber >= 0 && userNumber <= 3){
        console.log(`
The contents of cabinet ${userNumber} is: ${cargoHold[userNumber]}
            `);
        validInput = true;
    }else{
        userNumber = input.question("invalid number please enter a number between 0-3!: ");
    }
}
//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
    if(cargoHold[userNumber].includes(userItem)){
        console.log(`Cabinet ${userNumber} DOES include ${userItem}.
            `);
    }else{console.log(`Cabinet ${userNumber} DOES NOT include ${userItem}.
        `);}