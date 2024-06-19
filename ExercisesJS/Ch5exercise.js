
let engineIndicatorLight = "red blinking";
let spaceSuitsOn = true;
let shuttleCabinReady = true;
let crewStatus = spaceSuitsOn && shuttleCabinReady;
let computerStatusCode = 200;
let shuttleSpeed = 15000;
let fuelLevel = 21000;
let engineTemperature = 3000;


if(crewStatus === true){
    console.log("Crew Ready");
}else{console.log("Crew Not Ready")};

if(computerStatusCode === 200){
    console.log("Please stand by. Computer is rebooting");
}else if(computerStatusCode === 400){
    console.log("Success! Computer online")
}else{console.log("ALERT: Computer offline!")}

if(shuttleSpeed > 17500){
    console.log("ALERT: Escape velocity reached!");

}else{"Stable speed"}

if(fuelLevel > 20000 && engineTemperature <= 2500){
    console.log("Full tank. Engines good");
    
}else if(fuelLevel >10000 && engineTemperature <= 2500){
    console.log("Fuel level above 50%. Engines good");

    
}else if(fuelLevel >5000 && engineTemperature <= 2500){
    console.log("Fuel level above 25%. Engines good");
    
}else if(fuelLevel <= 5000 && engineTemperature > 2500){
    console.log("Check fuel level. Engines running hot");
}else if(fuelLevel < 1000 || engineTemperature > 3500 || engineIndicatorLight === "red blinking"){
    console.log("ENGINE FAILURE IMMINENT!");
    
}else{console.log("Fuel and engine status pending...")}

