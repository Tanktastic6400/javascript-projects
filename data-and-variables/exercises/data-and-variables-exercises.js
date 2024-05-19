// Declare and assign the variables below
let shuttleName = String("Determination");
let shuttleSpeed = Number(17500);
let distanceToMars = Number(225000000);
let distanceToMoon = Number(384400);
let milesToMars;
let hoursToMars;
let daysToMars;
let milesToMoon;
let hoursToMoon;
let daysToMoon;
const kpm = Number(0.621);

// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof(shuttleName), typeof(shuttleSpeed), typeof(distanceToMars), typeof(distanceToMoon), typeof(kpm) );

// Calculate a space mission below
//miles to mars first
milesToMars = distanceToMars * kpm;  //Answer is probably going to be distanceToMars = distanceToMars * kpm;

//hours to mars second
hoursToMars = milesToMars / shuttleSpeed;

//days to mars third
daysToMars = hoursToMars / 24;

// Print the results of the space mission calculations below
console.log(shuttleName, " is ", milesToMars, " miles from mars.");
console.log(shuttleName, " will take ", hoursToMars, "hours to reach Mars assuming it remains traveling", shuttleSpeed, " miles per hour.");
console.log("It will take " + daysToMars + " many days");


// Calculate a trip to the moon below
//miles to moon first
milesToMoon = distanceToMoon * kpm;  //Answer is probably going to be distanceToMars = distanceToMars * kpm;

//hours to moon second
hoursToMoon = milesToMoon / shuttleSpeed;

//days to moon third
daysToMoon = hoursToMoon / 24;


// Print the results of the trip to the moon below
console.log(shuttleName, " is ", milesToMoon, " miles from moon.");
console.log(shuttleName, " will take ", hoursToMoon, "hours to reach Moon assuming it remains traveling", shuttleSpeed, " miles per hour.");
console.log("It will take " + daysToMoon + " many days");