
let shuttleName = String("Determination");
let shuttleSpeed = Number(17500);
let kilometersToMars = Number(225000000);
let kilometersToMoon = Number(384400);
const kpm = Number(0.621);

let milesToMars = kilometersToMars * kpm;
let hoursToMars = milesToMars / shuttleSpeed;
let daysToMars = hoursToMars / 24;

let milesToMoon = kilometersToMoon * kpm;
let hoursToMoon = milesToMoon / shuttleSpeed;
let daysToMoon = hoursToMoon /24;


console.log(typeof(shuttleName), typeof(shuttleSpeed), typeof(kilometersToMars), typeof(kilometersToMoon), typeof(kpm) );

console.log(shuttleName + " will take " + daysToMars + " days to reach Mars.");

console.log(shuttleName + " will take " + daysToMoon + " days to reach the Moon.");