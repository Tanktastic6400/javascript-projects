let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;

const maximumMassLimit = 850000;

let fuelTempCelsius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;

let fuelLevel = "100%";
let weatherStatus = "clear";

let preparedForLiftOff = true;


if(astronautCount > 7){
    preparedForLiftOff = false;
}else if(astronautStatus != "ready"){
    preparedForLiftOff = false;

}else if (totalMassKg > maximumMassLimit){
    preparedForLiftOff = false;
  
  }else if( fuelTempCelsius < -300 || fuelTempCelsius > -150){

    preparedForLiftOff = false;
  }


if(preparedForLiftOff){
    console.log("ready");
}else{
    console.log("not ready");
}