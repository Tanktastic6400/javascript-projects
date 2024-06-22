const input = require('readline-sync');
let str = "LaunchCode";
let userNumber;
let viable = false;


//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
while(!viable){
    userNumber = input.question("Please enter the number of letters you would like to switch around: ");
        if(userNumber < str.length){
            viable = true;
        }else{
            console.log(userNumber = 3);
            console.log("Requested number is too large, set the default letters changed to 3.")
        }
}//end of while
let scramble = str.slice(userNumber);
scramble += str.slice(0,userNumber);

//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`I have changed: ${str} to now say ${scramble}`);
let phrase = "JavaScript rocks"

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
