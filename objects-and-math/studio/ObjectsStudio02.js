// Code your orbitCircumference function here:
function orbitCircumference(radius){
  return circum = 2 * Math.PI * radius;
}

// Code your missionDuration function here:
function missionDuration(orbits, radius = 2000, speed = 28000){
    let circum = Math.round(orbitCircumference(radius) * 100) /100;
    let time = Math.round((orbits * (circum / speed)) * 100) / 100;
    //console.log(`The mission will travel ${circum} km around the planet, and it will take ${time} hours to complete.`)
    return time;
}

// Copy/paste your selectRandomEntry function here:
function selectRandomEntry(idArr){
  let randNum = Math.floor(Math.random() * idArr.length);

  return idArr[randNum];
}

// Code your oxygenExpended function here:
function oxygenExpended(candidate, radius, speed){
  let hoursToComp = missionDuration(3, radius, speed);
  let oxygenUsed = Math.round(1000 * candidate.o2Used(hoursToComp));
  let str = `${candidate.name} will perform the spacewalk, which will last ${hoursToComp} hours and require ${oxygenUsed} kg of oxygen.`
  return str;
}

function leastO2Used(candArr){
  let smallestO2Usage;
  
  smallestO2Usage = candArr[0];
  for(let i = 1; i < candArr.length; i ++){
    
    if(smallestO2Usage.o2Used(1) > candArr[i].o2Used(1)){
      smallestO2Usage = candArr[i];
    }
  }
  return smallestO2Usage;
}// end of leastO2 function.

// Candidate data & crew array.
let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateA,candidateC,candidateE];
 
 console.log(oxygenExpended(leastO2Used(crew), 4000, 40000));