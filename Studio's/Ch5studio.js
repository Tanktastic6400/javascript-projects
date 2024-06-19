let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = "80.7";
let crewMassKg = (astronautCount * averageAstronautMassKg);
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = (crewMassKg + fuelMassKg + shuttleMassKg);
let maximumMassLimit = "850000";
let fuelTempCelsius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel ="100%";
let weatherStatus = "clear";
let preparedForLiftOff = true;


/*
date
time
astronautCount
crewMassKg
fuelMassKg
shuttleMassKg
totalMasskg
fuelTempCelsius
weatherStatus
Wish your astronauts a safe flight!
*/
if(astronautCount <=7 && astronautStatus === "ready" && totalMassKg < maximumMassLimit && (fuelTempCelsius > minimumFuelTemp || fuelTempCelsius< maximumFuelTemp)   && fuelLevel === "100%" && weatherStatus === "clear"){
    preparedForLiftOff = true;
    
    
  }else{preparedForLiftOff = false;}
  
if(preparedForLiftOff){
 //write output
 console.log("\n" + "date: " + date);
 console.log("time: " + time);
 console.log("Astronauts onboard: " + astronautCount);
 console.log("Crew weight: " + crewMassKg+ " kg");
 console.log("Current fuel mass: " + fuelMassKg + " kg");
 console.log("Shuttle mass: " + shuttleMassKg + " kg");
 console.log("Total mass: " + (fuelMassKg + crewMassKg + shuttleMassKg) + " kg");
 console.log("Fuel Temperature: " + fuelTempCelsius + " C");
 console.log("Weather: " + weatherStatus);
 
 console.log("\n" + "All systems are a go!  Prepare for launch in 'T' minus:");

 for(let i = 10; i >= 0; i--){
       console.log(i);

 }

 console.log("\nHave a pleasant mission!  Safe travels, and remember not to speak to strangers!\n");
 
 //put in a loop to count down from 10 just for some flair
 //there is a delay function in the book somewhere, find it.
}else{
    console.log("\n" + "One or more Systems are not ready" + "\n");
}
